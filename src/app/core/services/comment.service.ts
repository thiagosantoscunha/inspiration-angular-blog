import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://altmakerpro.com/wp-json/wp/v2/comments';
  }

  public getByPostId(postId: any): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${this.baseUrl}?post=${postId}`);
  }



}
