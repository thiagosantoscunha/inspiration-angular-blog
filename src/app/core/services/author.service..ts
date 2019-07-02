import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';
import { AuthorModel } from '../models/AuthorModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl += '/users';
  }

  public getById(id: any): Observable<AuthorModel> {
    return this.http.get<AuthorModel>(`${this.baseUrl}/${id}`);

  }

}
