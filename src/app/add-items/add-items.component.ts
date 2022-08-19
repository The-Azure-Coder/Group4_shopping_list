import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss'],
})
export class AddItemsComponent implements OnInit {

  itemForm!:FormGroup

  constructor(private fb:FormBuilder) {
    this.itemForm = this.fb.group({
      name: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      quantity: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required)
    })
  }

  get name(){
    return this.itemForm.get('name')
  }

  get category(){
    return this.itemForm.get('category')
  }

  get price(){
    return this.itemForm.get('price')
  }

  get quantity(){
    return this.itemForm.get('quantity')
  }

  ngOnInit() {}

}
