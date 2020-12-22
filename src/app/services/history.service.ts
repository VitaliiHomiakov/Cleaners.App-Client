import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {History} from '../interfaces/history.interface';
import {CommonResponse} from '../interfaces/common.interface';

@Injectable()
export class HistoryService {
  constructor(private http: HttpClient) { }

  getHistory(params?: any): Observable<CommonResponse<History[]>> {
    const queryParams = new HttpParams()
      .set('start', params?.start?.toString() || 0)
      .set('limit', params?.limit?.toString() || 20);

    return this.http.get<CommonResponse<History[]>>('/core/user/history', {params: queryParams});
  }
}
