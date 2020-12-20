import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {catchError, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as authActions from '../actions/auth.actions';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import * as userActions from '../actions/user.actions';
import * as historyActions from '../actions/history.actions';
import {Store} from '@ngrx/store';
import {AppState} from '@capacitor/core';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.Login),
    tap(() => this.store$.dispatch(userActions.LoadingUser())),
    switchMap(action => this.authService.login(action.params).pipe(
      tap(tokens => {
        localStorage.setItem('token', tokens.token);
        localStorage.setItem('refreshToken', tokens.refresh_token);
        this.router.navigateByUrl('/core').then();
      }),
      mergeMap(() => [userActions.GetProfile(), userActions.GetUserBarcode(), historyActions.GetHistory({params: {}})]),
      catchError(error => throwError(error))
    ))
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.Logout),
    mergeMap(() => this.authService.logout().pipe(
      tap(() => {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('token');
        this.router.navigateByUrl('/auth').then();
      }),
      catchError(error => throwError(error))
    ))
  ), {dispatch: false});

  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.SignUp),
    mergeMap(action => this.authService.signUp(action.params).pipe(
      tap(res => (!!res.id && this.router.navigateByUrl('/auth/login'))),
      catchError(error => throwError(error))
    ))
  ), { dispatch: false });


  constructor(private actions$: Actions, private authService: AuthService,
              private router: Router, private store$: Store<AppState>) {}
}
