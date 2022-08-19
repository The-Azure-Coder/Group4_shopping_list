import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {

  constructor( private category : CategoryService) { }

  //should be changed when model is created for it
  categories:any = []

  ngOnInit() {
    this.category.getItems().subscribe((result)=>{
        this.categories = result
    })
  }

  

  updateCategory(id:any){

  }

  deleteCategory(id:any){
    // let item = this.categories.filter((category)=>{
    //   return category !== id
    // })

    console.log(id)
  }
}
 