import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/categoryModel';
import { MenuController } from '@ionic/angular';
import { Item } from '../models/itemModel';

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

  inputValue:string = '';

  updateInfo:Category;

  editAndUpdate : boolean = false;

  id:string;

  ngOnInit() {
    //grabbing all categories from database
    this.category.getItems().subscribe((result)=>{
       this.categories = result.data
    })
  }

  
//function to update category
  editCategory(id:any, event:any){

    this.editAndUpdate = true 

    this.id = id

    var contentToChange = event.target.offsetParent.children[0];
    // contentToChange.style.border = '1px solid blue';
    contentToChange.style.outline = 'none';
    contentToChange.contentEditable="true";

   this.updateInfo = contentToChange.textContent

  }

  updateCategory(id:any, event:any){

    this.category.updateItem(this.id, this.updateInfo).subscribe(()=>{
      // var contentToChange = event.target.offsetParent.children[0];
      // contentToChange.style.border = 'none';
      // contentToChange.style.outline = 'none';
      // contentToChange.contentEditable="false"; 
      console.log(this.updateInfo)
    })
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
 