import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl += '/posts';
  }

  public getAll(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}`);
  }

  public getSticky(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}?sticky=true`);
  }

  public getById(id: any): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.baseUrl}/${id}`);
  }

  public getPostWithLimit(limit: number, order: string = 'desc'): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}?per_page=${limit}&order=${order}`);
  }

  public getByCategoryId(categoryId: any): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}?categories=${categoryId}`);
  }

  public getByCategories(categoriesIds: any[]): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}?categories=${categoriesIds}`);
  }

  public getByAuthor(authorId: any[]): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}?author=${authorId}`);
  }

  getBySlug(slug: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}?slug=${slug}`);
  }

}
