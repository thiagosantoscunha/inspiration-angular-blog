import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';
import { AuthorModel } from '../models/AuthorModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://altmakerpro.com/wp-json/wp/v2/users';
  }

  public getById(id: any): Observable<AuthorModel> {
    return this.http.get<AuthorModel>(`${this.baseUrl}/${id}`);

  }

}
