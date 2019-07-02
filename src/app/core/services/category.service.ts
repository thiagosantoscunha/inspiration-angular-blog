import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/CategoryModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl += '/categories';
  }

  public getById(id: any): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.baseUrl}/${id}`);
  }

  public getByName(name: string, limit: number = 1): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.baseUrl}?name=${name}&per_page=${limit}`);
  }

  public getBySlug(name: string, limit: number = 1): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${this.baseUrl}?slug=${name}`);
  }

}
