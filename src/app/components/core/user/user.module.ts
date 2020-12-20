import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './user.component';
import {RouterModule} from '@angular/router';
import {UserRoutingModule} from './user-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {HistoryEffects} from '../../../store/effects/history.effects';
import {HistoryService} from '../../../services/history.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UserRoutingModule,
    EffectsModule.forFeature([HistoryEffects]),
  ],
  declarations: [UserComponent],
  providers: [HistoryService]
})
export class UserModule {}
