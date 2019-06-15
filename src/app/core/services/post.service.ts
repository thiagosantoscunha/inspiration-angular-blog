import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';

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

}
