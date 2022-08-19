import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/categoryModel';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {

  constructor( private category : CategoryService) { }

  //should be changed when model is created for it
  categories:Category[] = []

  inputValue:string = ''

  ngOnInit() {
    this.category.getItems().subscribe((result)=>{
       this.categories = result.data
       console.log(this.categories)
       console.log(this.inputValue)
    })
  }

  

  updateCategory(id:any){

  }

  addCategory(input:any){
  const _input: Category = {category_name: input};    

    this.category.createItem(_input).subscribe(()=>{
      console.log(_input)
    })
  }

  deleteCategory(id:any){
    let item = this.categories.filter((category)=>{
      return category != id
    })

    console.log(item)
  }
}
 