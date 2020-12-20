import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user.interface';

@Injectable()
export class HistoryService {
  constructor(private http: HttpClient) { }

  getHistory(params?: any): Observable<any> {
    const queryParams = new HttpParams()
      .set('start', params?.start?.toString() || 0)
      .set('limit', params?.limit?.toString() || 20);

    return this.http.get<any>('/core/user/history', {params: queryParams});
  }
}
