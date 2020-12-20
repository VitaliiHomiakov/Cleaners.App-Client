import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {UserService} from '../../services/user.service';
import * as userActions from '../actions/user.actions';
import {AlertsService} from '../../services/alerts.service';

@Injectable()
export class UserEffects {

  getProfile$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.GetProfile),
    switchMap(() => this.userService.getProfile().pipe(
      map(user => userActions.SetUser({user})),
      catchError(error => throwError(error))
    ))
  ));

  getBarcode$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.GetUserBarcode),
    switchMap(() => this.userService.getBarCode().pipe(
      map(({barcode}) => userActions.SetUserBarcode({barcode})),
      catchError(error => throwError(error))
    ))
  ));

  sendInvite$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.SendInvite),
    mergeMap(payload => this.userService.sendInvite(payload.params).pipe(
      tap(res => this.alertService.successMessage(res.message)),
      catchError(error => throwError(error))
    ))
  ), {dispatch: false});

  constructor(private actions$: Actions, private userService: UserService, private alertService: AlertsService) {}
}
