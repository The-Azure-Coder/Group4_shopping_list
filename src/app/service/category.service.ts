import { Category } from '../models/categoryModel';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './../interfaces/api-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  /**
   *  http://localhost:3000/category/
   */
  private apiUrl = environment.apiUrl + '/category/';

  getItems() {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  createItem(category: Category) {
    return this.http.post<ApiResponse>(this.apiUrl, category);
  }

  updateItem(categoryID: string, category: Category) {
    return this.http.patch<ApiResponse>(this.apiUrl + categoryID, category);
  }

  deleteItem(cateforyID: string) {
    return this.http.delete<ApiResponse>(this.apiUrl + cateforyID);
  }
}
