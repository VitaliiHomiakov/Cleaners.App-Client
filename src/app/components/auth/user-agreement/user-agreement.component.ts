import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'cleaner-user-agreement',
  templateUrl: 'user-agreement.component.html',
  styleUrls: ['user-agreement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAgreementComponent {

  constructor(private store$: Store<AppState>, private modalController: ModalController) {}

  async close(): Promise<void> {
    await this.modalController.dismiss();
  }
}
