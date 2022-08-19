import { Item } from '../models/itemModel';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './../interfaces/api-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor(private http: HttpClient) {}

  /**
   *  http://localhost:3000/item/
   */
  private apiUrl = environment.apiUrl + '/item/';

  getItems() {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  createItem(shoppingItem: Item) {
    return this.http.post<ApiResponse>(this.apiUrl, shoppingItem);
  }

  updateItem(shoppingItemID: string, shoppingItem: Item) {
    return this.http.patch<ApiResponse>(
      this.apiUrl + shoppingItemID,
      shoppingItem
    );
  }

  deleteItem(shoppingItemID: string) {
    return this.http.delete<ApiResponse>(this.apiUrl + shoppingItemID);
  }
}
