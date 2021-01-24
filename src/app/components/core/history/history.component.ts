import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import {selectHistories} from '../../../store/selectors/history.selectors';
import * as moment from 'moment';
import {delay, filter, map, take, tap, withLatestFrom} from 'rxjs/operators';
import {GetHistory} from '../../../store/actions/history.actions';

@Component({
  selector: 'cleaners-history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {

  histories$ = this.store$.pipe(select(selectHistories));
  moment = moment;

  constructor(
    private store$: Store<AppState>
  ) {

  }

  ngOnInit() {

  }

  loadMore($event: CustomEvent): void {
    this.histories$.pipe(
      filter(historyData => historyData.items.length < historyData.pagination.total || !historyData.pagination.total),
      take(1),
    ).subscribe(historyData => {
      this.store$.dispatch(GetHistory({params: {
        start: historyData.pagination.start + historyData.pagination.limit
      }}));
      if (historyData.items.length + historyData.pagination.limit >= historyData.pagination.total) {
        ($event.target as EventTarget & {disabled: boolean}).disabled = true;
      }
      ($event.target as EventTarget & {complete}).complete();
    });
  }
}
