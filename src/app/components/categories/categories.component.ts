import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/models/categoryModel';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  getAllCategories(){
    this.categoryService.getItems().subscribe(results=>{
      this.categories = results.data;
    })

  }

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategories()
  }

}
