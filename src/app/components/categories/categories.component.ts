import { Component, OnInit, ViewChildren } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { MenuController, ModalController } from '@ionic/angular';
import { Category } from 'src/app/models/categoryModel';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Item } from 'src/app/models/itemModel';
import { ShoppingListService } from 'src/app/service/shopping-list.service';
import { ApiResponse } from 'src/app/interfaces/api-response';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private itemService: ShoppingListService,
    private menu: MenuController,
    private modalCtrl: ModalController
  ) {}

  categories: Category[] = [];
  items: Item[] = [];
  inputValue: string;
  editId: string;
  name: string;

  itemName: string;
  itemPrice : number;
  itemQuantity : number;
  itemCategory : string

  ngOnInit() {
    this.getAllCategories();
    this.getAllItems();
  }

  open() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  getAllCategories() {
    this.categoryService.getItems().subscribe((results) => {
      this.categories = results.data;
    });
  }

  getAllItems() {
    this.itemService
      .getItems()
      .subscribe({ next: (resp: ApiResponse) => (this.items = resp.data) });
  }

  deleteCategory(id: any) {
    this.categoryService.deleteItem(id).subscribe(() => {
      this.categories = this.categories.filter((category) => {
        return category._id !== id;
      });
    });
  }

  deleteItem(id: any) {
    this.itemService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter((item) => {
        return item._id !== id;
      });
    });
  }



  passInfo(id: any, data: any) {
    this.inputValue = data;
    this.editId = id;
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'update') {
      this.categoryService
        .updateItem(this.editId, { category_name: this.inputValue })
        .subscribe(() => {
          this.getAllCategories();
        });
    }
  }

  passItem(id: any, data: Item) {
    this.itemName = data.item_name;
    this.itemPrice = data.price;
    this.itemQuantity = data.quantity;
    this.itemCategory = data.categoryID
    this.editId = data._id
  }

  updatedList(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'update') {
      this.itemService
        .updateItem(this.editId, {
          _id: this.editId,
          categoryID: this.itemCategory,
          item_name: this.itemName,
          price: this.itemPrice,
          quantity: this.itemQuantity
          })
        .subscribe(() => {
          this.getAllItems()
        });
    }
  }
}
