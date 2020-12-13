import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login, ResetPassword, SignedUp, SignUp, Tokens} from '../interfaces/auth.interface';
import {StatusResponse} from '../interfaces/common.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(loginParams: Login): Observable<Tokens> {
    return this.http.post<Tokens>('/auth/login', loginParams);
  }

  signUp(signUpParams: SignUp): Observable<SignedUp> {
    return this.http.post<SignedUp>('/auth/sign-up', signUpParams);
  }

  refreshToken(): Observable<Tokens> {
    return this.http.post<Tokens>('/auth/refresh', {
      refreshToken: localStorage.getItem('refreshToken')
    });
  }

  recoverPass(email: string): Observable<StatusResponse> {
    return this.http.post<StatusResponse>('/auth/restore-password', {email});
  }

  resetPass(params: ResetPassword): Observable<StatusResponse> {
    return this.http.post<StatusResponse>('/auth/reset-password', params);
  }
}
