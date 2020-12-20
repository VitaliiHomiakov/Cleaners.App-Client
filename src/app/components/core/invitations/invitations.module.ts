import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InvitationsComponent} from './invitations.component';
import {RouterModule} from '@angular/router';
import {InvitationsRoutingModule} from './invitations-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InvitationsRoutingModule
  ],
  declarations: [InvitationsComponent]
})
export class InvitationsModule {}
