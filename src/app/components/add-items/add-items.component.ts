import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ShoppingListService } from 'src/app/service/shopping-list.service';
import { Category } from 'src/app/models/categoryModel';
import { CategoryService } from 'src/app/service/category.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss'],
})
export class AddItemsComponent implements OnInit {

  @ViewChild('message') message!: ElementRef
  categories!: Category[];

  constructor(private itemService:ShoppingListService,private categoryService:CategoryService,private modalCtrl: ModalController) {}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getItems().subscribe((allCategories) => {
      this.categories = allCategories.data
      console.log(`Categories are: ${this.categories}`);      
    })
  }

  itemForm = new FormGroup({
    item_name: new FormControl('', Validators.required),
    categoryID: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    quantity: new FormControl(0, Validators.required),
  });

  get item_name() {
    return this.itemForm.get('item_name');
  }

  get categoryID() {
    return this.itemForm.get('categoryID');
  }

  get price() {
    return this.itemForm.get('price');
  }

  get quantity() {
    return this.itemForm.get('quantity');
  }

  addItem(){
    const { item_name,categoryID,price,quantity} = this.itemForm.value;
    if(this.itemForm?.invalid){
      this.message.nativeElement.innerHTML = "Please complete form"
      this.message.nativeElement.style.color ="red"
      this.message.nativeElement.style.marginTop ='-10px'
    }else{
    this.itemService.createItem({item_name,categoryID,price,quantity}).subscribe({
      next:()=>{
         this.message.nativeElement.innerHTML = "Item Added"
         this.message.nativeElement.style.color ="green"
         this.message.nativeElement.style.marginTop ='-10px'
         this.itemForm.reset();
      },
      error:(err)=>{
        console.log(err);
      }
    })
   }
  }
  
  async closeDialog(){
    const modal = await this.modalCtrl.dismiss({
      component: AddItemsComponent,
    });
  }

}
