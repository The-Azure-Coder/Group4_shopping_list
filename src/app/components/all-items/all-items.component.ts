import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { AddItemsComponent } from '../add-items/add-items.component';
import { Item } from 'src/app/models/itemModel';
import { ShoppingListService } from 'src/app/service/shopping-list.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss'],
})
export class AllItemsComponent implements OnInit {
  items: any[] | Item[]=[]

  constructor(private menu: MenuController, private modalCtrl: ModalController,private shopService: ShoppingListService) {}
  open(){
    this.menu.enable(true, "first")
    this.menu.open("first")  
  }

  getItemsList(){
    this.shopService.getItems().subscribe(results=>{
      this.items = results.data
    })
  }

  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddItemsComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }



  ngOnInit() {
    this.getItemsList()
  }

}
