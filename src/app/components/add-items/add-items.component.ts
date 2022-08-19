import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss'],
})
export class AddItemsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
  });

  get name() {
    return this.itemForm.get('name');
  }

  get category() {
    return this.itemForm.get('category');
  }

  get price() {
    return this.itemForm.get('price');
  }

  get quantity() {
    return this.itemForm.get('quantity');
  }
}
