import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UpdateUserPassword} from '../../../store/actions/user.actions';
import {AlertsService} from '../../../services/alerts.service';

@Component({
  selector: 'cleaners-security',
  templateUrl: 'security.component.html',
  styleUrls: ['security.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecurityComponent implements OnInit {

  securityForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, [this.mathPassword]);

  constructor(
    private alertService: AlertsService,
    private store$: Store<AppState>
  ) {

  }

  ngOnInit() {

  }

  async savePassword(): Promise<void> {
    if (this.securityForm.invalid) {
      return await this.alertService.errorMessage('Введеные пароли не совпадают');
    }

    this.store$.dispatch(UpdateUserPassword({passwords: this.securityForm.value}));
  }

  private mathPassword(control: AbstractControl): {[key: string]: boolean} | null  {
    return control.value.newPassword !== control.value.confirmPassword ? { error: true } : null;
  }
}
