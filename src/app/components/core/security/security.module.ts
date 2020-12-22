import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SecurityRoutingModule} from './security-routing.module';
import {SecurityComponent} from './security.component';
import {ReactiveComponentModule} from '@ngrx/component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SecurityRoutingModule,
    ReactiveComponentModule
  ],
  declarations: [SecurityComponent]
})
export class SecurityModule {}
