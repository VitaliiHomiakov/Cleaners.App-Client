import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {HistoryService} from '../../services/history.service';

@Injectable()
export class HistoryEffects {

  constructor(private actions$: Actions, private historyService: HistoryService) {}
}
