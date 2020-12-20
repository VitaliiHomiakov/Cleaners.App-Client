import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HistoryService} from '../../services/history.service';
import * as historyActions from '../actions/history.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable()
export class HistoryEffects {

  constructor(private actions$: Actions, private historyService: HistoryService) {}

  getHistory$ = createEffect(() => this.actions$.pipe(
    ofType(historyActions.GetHistory),
    switchMap(payload => this.historyService.getHistory(payload.params).pipe(
      map(history => historyActions.SetHistory({history})),
      catchError(error => throwError(error))
    ))
  ));
}
