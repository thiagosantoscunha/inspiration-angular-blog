import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _post: PostModel;
  private _posts: Array<PostModel>;

  constructor(private _http: HttpClient) { }

}
