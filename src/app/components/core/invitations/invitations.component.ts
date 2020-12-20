import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertsService} from '../../../services/alerts.service';
import {SendInvite} from '../../../store/actions/user.actions';


@Component({
  selector: 'cleaners-invitations',
  templateUrl: 'invitations.component.html',
  styleUrls: ['invitations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvitationsComponent implements OnInit {

  invitationForm = new FormGroup({
    type: new FormControl('email'),
    phone: new FormControl('', [Validators.minLength(11), Validators.maxLength(11)]),
    email: new FormControl('', [Validators.email]),
  });

  constructor(
    private alertService: AlertsService,
    private store$: Store<AppState>
  ) {

  }

  ngOnInit() {

  }

  async sendInvite(): Promise<void> {
    if (this.invitationForm.invalid) {
      return await this.alertService.errorMessage('Неверное значение');
    }

    const type = this.invitationForm.get('type').value;
    const value = type === 'email' ? this.invitationForm.get('email').value : this.invitationForm.get('phone').value;

    this.store$.dispatch(SendInvite({params: {
      type,
      value
    }}));
  }

}
