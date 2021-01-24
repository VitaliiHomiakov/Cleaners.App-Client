import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'cleaner-privacy-policy',
  templateUrl: 'privacy-policy.component.html',
  styleUrls: ['privacy-policy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyComponent {

  constructor(private store$: Store<AppState>, private modalController: ModalController) {}

  async close(): Promise<void> {
    await this.modalController.dismiss();
  }
}
