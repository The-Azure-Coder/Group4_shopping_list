import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { MenuController } from '@ionic/angular';
import { Category } from 'src/app/models/categoryModel';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

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

  constructor(private categoryService: CategoryService,private menu: MenuController) { }

  ngOnInit() {
    this.getAllCategories()
  }

}
