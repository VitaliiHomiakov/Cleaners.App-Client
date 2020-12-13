import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreComponent} from './core.component';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';
import {CoreRoutingModule} from './core-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CoreRoutingModule,
    UserModule
  ],
  declarations: [CoreComponent]
})
export class CoreModule {}
