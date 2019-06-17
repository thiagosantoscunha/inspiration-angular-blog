import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://altmakerpro.com/wp-json/wp/v2/posts';
  }

  public getSticky(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}?sticky=true`);
  }

  public getById(id: any): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.baseUrl}/${id}`);
  }

  public getPostWithLimit(limit: number, order: string = 'asc'): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}?per_page=${limit}&order=${order}`);
  }

  public getByCategoryId(categoryId: any): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}?categories=${categoryId}`);
  }

}
