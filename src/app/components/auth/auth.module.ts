import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {UserAgreementComponent} from './user-agreement/user-agreement.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, SignUpComponent, UserAgreementComponent, PrivacyPolicyComponent]
})
export class AuthModule {}
