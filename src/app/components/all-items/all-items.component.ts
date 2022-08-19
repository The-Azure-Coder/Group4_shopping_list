import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss'],
})
export class AllItemsComponent implements OnInit {
  constructor(private menu: MenuController) {}
  open(){
    this.menu.enable(true, "first")
    this.menu.open("first")  
  }

  ngOnInit() {}

}
