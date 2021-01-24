import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '@capacitor/core';
import {Login} from '../../../store/actions/auth.actions';
import {AlertsService} from '../../../services/alerts.service';

@Component({
  selector: 'cleaner-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {

  loginForm = new FormGroup({
    emailOrPhone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private store$: Store<AppState>, private alertService: AlertsService) {}

  login(): void | Promise<void> {
    if (this.loginForm.invalid) {
      return this.alertService.errorMessage('Не заполнены поля');
    }
    this.store$.dispatch(Login({params: this.loginForm.value}));
  }

}
