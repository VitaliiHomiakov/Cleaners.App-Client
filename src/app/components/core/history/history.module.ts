import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HistoryRoutingModule} from './history-routing.module';
import {HistoryComponent} from './history.component';
import {ReactiveComponentModule} from '@ngrx/component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HistoryRoutingModule,
    ReactiveComponentModule
  ],
  declarations: [HistoryComponent]
})
export class HistoryModule {}
