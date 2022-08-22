import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { AddItemsComponent } from '../add-items/add-items.component';
import { Item } from 'src/app/models/itemModel';
import { OverlayEventDetail } from '@ionic/core/components';
import { ShoppingListService } from 'src/app/service/shopping-list.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss'],
})
export class AllItemsComponent implements OnInit {
  items: any[] | Item[]=[]


inputName: string;
inputPrice: number;
inputQuantity: number
editId: string;
id : string;
categoryId : string

  constructor(private menu: MenuController, 
    private modalCtrl: ModalController, 
    private shoppingList : ShoppingListService,
    ) {}

  open(){
    this.menu.enable(true, "first")
    this.menu.open("first")  
  }
  
    getAllItems():void{
    this.shoppingList.getItems().subscribe((result)=>{
      this.items = result.data
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
      this.getAllItems()
  }



  
  deleteItem(id:any) {
    this.shoppingList.deleteItem(id).subscribe(() => {
      this.items = this.items.filter((item) => {
        return item._id !== id;
      });
    });
  }

  passInfo(data: Item) {
    this.inputName = data.item_name
    this.inputPrice = data.price
    this.inputQuantity = data.quantity
    this.id = data._id
    this.categoryId = data.categoryID
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'update') {
      this.shoppingList
        .updateItem(this.id, {
          _id : this.id ,
          categoryID: this.categoryId,
          item_name: this.inputName,
          price: this.inputPrice,
          quantity: this.inputQuantity
        })
        .subscribe(() => {
          this.getAllItems();
        });
    }
  }

}
