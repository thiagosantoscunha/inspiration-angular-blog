import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TagModel } from '../models/TagModel';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private urlBase: string;

  constructor(private http: HttpClient) {
    this.urlBase = 'http://altmakerpro.com/wp-json/wp/v2/tags';
  }

  public getById(id: any): Observable<TagModel> {
    return this.http.get<TagModel>(`${this.urlBase}/${id}`);
  }

}
