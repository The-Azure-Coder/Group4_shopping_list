import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/categoryModel';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {

  constructor( private category : CategoryService, private menu:MenuController) { }

  //variable for storing editable input field
@ViewChild('editableField')editableField : ElementRef;

//array listing categories
  categories:Category[] = []

  inputValue:string = ''

  ngOnInit() {
    //grabbing all categories from database
    this.category.getItems().subscribe((result)=>{
       this.categories = result.data
    })
  }

  
//function to update category
  editCategory(id:any, index:any){

  }

//function to add category
  addCategory(input:any){
  const _input: Category = {category_name: input};    

    this.category.createItem(_input).subscribe(()=>{
      this.inputValue = ''
      
    })
  }

  //function to delete category
  deleteCategory(id:any){
  
    this.category.deleteItem(id).subscribe(()=>{
      this.categories = this.categories.filter((category)=>{
        return category._id !== id
      })
    
    })
  }

  //hamburger menu 
  open(){
    this.menu.enable(true, "first")
    this.menu.open("first")  
  }
}
 