import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import * as userActions from '../../store/actions/user.actions';
import {isUserLoading, selectUser} from '../../store/selectors/user.selectors';
import {filter, map, take, withLatestFrom} from 'rxjs/operators';
import {Statuses} from '../../app.constants';
import {User} from '../../interfaces/user.interface';

@Component({
  selector: 'cleaners-core',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent implements OnInit {

  user$ = this.store$.pipe(
    select(selectUser),
    filter(user => user.status === Statuses.LOADED),
    map(user => user.data as User)
  );

  selectedIndex = 0;
  appPages = [
    {
      title: 'Баланс',
      url: '/core/user',
      icon: 'person-outline'
    },
    {
      title: 'Пригласить',
      url: '/core/invite',
      icon: 'add-circle-outline'
    },
    {
      title: 'Безопасность',
      url: '/core/folder/Favorites',
      icon: 'lock-closed-outline'
    },
    {
      title: 'Выход',
      url: '/auth/logout',
      icon: 'exit-outline'
    }
  ];

  constructor(
    private store$: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.store$.pipe(
      select(selectUser),
      withLatestFrom(this.store$.pipe(select(isUserLoading))),
      filter(([user, isLoading]) => !user.data?.id && !isLoading),
      take(1)
    ).subscribe(() => this.store$.dispatch(userActions.GetProfile()));
  }
}
