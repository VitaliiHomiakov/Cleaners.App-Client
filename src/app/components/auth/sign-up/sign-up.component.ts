import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '@capacitor/core';
import {SignUp} from '../../../store/actions/auth.actions';
import {ModalController} from '@ionic/angular';
import {UserAgreementComponent} from '../user-agreement/user-agreement.component';
import {PrivacyPolicyComponent} from '../privacy-policy/privacy-policy.component';

@Component({
  selector: 'fit-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    agreements: new FormControl(false, [Validators.required]),
    code: new FormControl(''),
  });

  constructor(private store$: Store<AppState>, private modalController: ModalController) {}

  signUp(): void {
    this.store$.dispatch(SignUp({params: this.signUpForm.value}));
  }

  async openUserAgreement(): Promise<void> {
    const userAgreement = await this.modalController.create({
      component: UserAgreementComponent,
    });
    await userAgreement.present();
  }

  async openPrivacyPolicy(): Promise<void> {
    const privacyPolicy = await this.modalController.create({
      component: PrivacyPolicyComponent,
    });
    await privacyPolicy.present();
  }

}
