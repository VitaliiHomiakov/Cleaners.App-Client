import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectUser} from '../../../store/selectors/user.selectors';
import {filter, map} from 'rxjs/operators';
import {Statuses} from '../../../app.constants';
import {User} from '../../../interfaces/user.interface';
import {AppState} from '../../../store/reducers';
import {GetProfile} from '../../../store/actions/user.actions';

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

  user$ = this.store$.pipe(
    select(selectUser),
    filter(user => user.status === Statuses.LOADED),
  );

  constructor(
    private store$: Store<AppState>
  ) {

  }

  ngOnInit() {

  }

  refresh($event: RefreshEvent): void {
    this.store$.dispatch(GetProfile());
    $event.target.complete();
  }
}
