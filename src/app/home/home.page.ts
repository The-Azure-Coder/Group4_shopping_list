import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { AddItemsComponent } from '../components/add-items/add-items.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController,private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddItemsComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }

  open(){
    this.menu.enable(true, "first")
    this.menu.open("first")  
  }
  ngOnInit(){

  }

}
