import {Injectable, isDevMode} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, finalize, map, switchMap, take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Tokens} from '../interfaces/auth.interface';
import * as _ from 'lodash';
import {AlertsService} from '../services/alerts.service';
import {CONF} from '../app.config';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject$: BehaviorSubject<Tokens> = new BehaviorSubject<Tokens>(null);

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertsService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('token');
    request = request.clone({
      ...(accessToken && {headers: request.headers.set('Authorization', `Bearer ${accessToken}`)}),
      url: isDevMode() ? `http://127.0.0.1:8000${request.url}` : `${CONF.API}${request.url}`
    });

    if (!request.headers.has('Content-Type')) {
      request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    }

    request = request.clone({headers: request.headers.set('Accept', 'application/json')});

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        switch (true) {
          case error.status === 401 && error.error.message === 'LOGIN.BAD_CREDENTIALS':
            this.alertService.errorMessage(error.error.message, 7000).then();
            return throwError(error);
          case error.status === 401:
            return this.handleUnauthorized(request, next);
          default:
            this.alertService.errorMessage(error.error.message || error.statusText, 7000).then();
            return throwError(error);
        }
      }));
  }

  private addTokens(request: HttpRequest<any>, tokens: Tokens): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${tokens.token}`
      }
    });
  }

  private handleUnauthorized(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject$.next(null);

      return this.authService.refreshToken().pipe(
        finalize(() => {
          this.isRefreshing = false;
        }),
        switchMap(tokens => {
          this.refreshTokenSubject$.next(tokens);
          localStorage.setItem('refreshToken', tokens.refreshToken);
          localStorage.setItem('token', tokens.token);
          return next.handle(this.addTokens(request, tokens));
        }),
        catchError(error => {
          this.cleanTokens();
          this.router.navigateByUrl('/auth/login');
          return throwError(error);
        })
      );
    } else {
      return this.refreshTokenSubject$.pipe(
        filter(tokens => !_.isEmpty(tokens)),
        take(1),
        switchMap(tokens => {
          return next.handle(this.addTokens(request, tokens));
        })
      );
    }
  }

  private cleanTokens(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }
}
