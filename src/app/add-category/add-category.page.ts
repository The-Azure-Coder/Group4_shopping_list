import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories = ['cat1', 'cat2', 'cat3']

  updateCategory(){

  }

  deleteCategory(){
    
  }
}
