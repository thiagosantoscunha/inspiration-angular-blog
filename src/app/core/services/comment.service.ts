import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/CommentModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl += '/comments';
  }

  public getByPostId(postId: any): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${this.baseUrl}?post=${postId}`);
  }



}
