import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { AddItemsComponent } from '../add-items/add-items.component';
@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss'],
})
export class AllItemsComponent implements OnInit {
  constructor(private menu: MenuController, private modalCtrl: ModalController) {}
  open(){
    this.menu.enable(true, "first")
    this.menu.open("first")  
  }

  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddItemsComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }



  ngOnInit() {}

}
