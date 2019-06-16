import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/CategoryModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://altmakerpro.com/wp-json/wp/v2/categories';
  }

  public getById(id: any): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.baseUrl}/${id}`);
  }

}
