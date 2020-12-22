import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, UserBarcode} from '../interfaces/user.interface';
import {ResponseMessage} from '../interfaces/common.interface';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getProfile(): Observable<User> {
    return this.http.get<User>('/core/user');
  }

  getBarCode(): Observable<UserBarcode> {
    return this.http.get<UserBarcode>('/core/user/barcode');
  }

  sendInvite(params: any): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>('/core/user/invite', params);
  }

  updatePassword(params: any): Observable<ResponseMessage> {
    return this.http.patch<ResponseMessage>('/core/user/password', params);
  }
}
