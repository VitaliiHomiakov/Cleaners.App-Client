import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectUser} from '../../../store/selectors/user.selectors';
import {filter} from 'rxjs/operators';
import {Statuses} from '../../../app.constants';
import {AppState} from '../../../store/reducers';
import {GetProfile} from '../../../store/actions/user.actions';
import {selectFirstHistories} from '../../../store/selectors/history.selectors';
import * as moment from 'moment';

interface RefreshEvent {
  target: {
    complete(): void
  };
}

@Component({
  selector: 'cleaners-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  moment = moment;
  user$ = this.store$.pipe(
    select(selectUser),
    filter(user => user.status === Statuses.LOADED),
  );

  userHistory$ = this.store$.pipe(select(selectFirstHistories));

  constructor(
    private store$: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.userHistory$.subscribe(r => console.log(7771, r))
  }

  refresh($event: RefreshEvent): void {
    this.store$.dispatch(GetProfile());
    $event.target.complete();
  }
}
