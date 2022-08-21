import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { MenuController , ModalController } from '@ionic/angular';
import { Category } from 'src/app/models/categoryModel';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

  open(){
    this.menu.enable(true, "first")
    this.menu.open("first")  
  }
  categories: Category[] = [];
  getAllCategories(){
    this.categoryService.getItems().subscribe(results=>{
      this.categories = results.data;
    })

  }

  constructor(private categoryService: CategoryService,private menu: MenuController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.getAllCategories()
  }


  //function to delete category
  deleteCategory(id:any){
  
    this.categoryService.deleteItem(id).subscribe(()=>{
      this.categories = this.categories.filter((category)=>{
        return category._id !== id
      })
    
    })
  }

  
  //modal control code
  name: string; 

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'update');
  }

  inputValue:Category;
  editId: string

  passInfo(id:any, data:any){
    this.inputValue = data;
    this.editId = id

  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'update') {
      this.categoryService.updateItem(this.editId, this.inputValue).subscribe(()=>{
      })
    }
  }

  
}
