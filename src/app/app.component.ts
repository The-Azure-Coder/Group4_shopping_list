import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { AddItemsComponent } from './components/add-items/add-items.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController,private modalCtrl: ModalController) {}

  close() {
    this.menu.close('first');
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddItemsComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }
}
