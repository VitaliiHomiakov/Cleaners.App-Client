import {Injectable} from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';

@Injectable()
export class AlertsService {
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
  ) {
  }

  async errorMessage(message: string, duration = 3000, position = 'top'): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration,
      position: position as 'top' | 'bottom' | 'middle',
      color: 'danger',
    });
    return toast.present();
  }

  async successMessage(message: string, duration = 3000, position = 'top'): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration,
      position: position as 'top' | 'bottom' | 'middle',
      color: 'success',
    });
    return toast.present();
  }
}
