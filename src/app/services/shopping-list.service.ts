import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../interfaces/api-response';
import { Item } from '../models/itemModel';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor(private http: HttpClient) {}

  /**
   *  http://localhost:3000/item/
   *
   * TIP: Hold Ctrl then hover variables to see the value
   */
  private apiUrl = environment.apiUrl + '/item/';

  getItems() {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  getItem(shoppingItemID: string) {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${shoppingItemID}`);
  }

  createItem(shoppingItem: Item) {
    return this.http.post<ApiResponse>(this.apiUrl, shoppingItem);
  }

  updateItem(shoppingItemID: string, shoppingItem: Item) {
    return this.http.patch<ApiResponse>(
      `${this.apiUrl}/${shoppingItemID}`,
      shoppingItem
    );
  }

  deleteItem(shoppingItemID: string) {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${shoppingItemID}`);
  }
}
