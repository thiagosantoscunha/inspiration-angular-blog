import { Injectable } from '@angular/core';
import { MediaModel } from '../models/media.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private baseUrl: string = 'http://altmakerpro.com/wp-json/wp/v2';

  constructor(private _http: HttpClient) { }

  public getBySlug(slug: string = 'logotipo'): Observable<MediaModel> {
    return this._http.get<MediaModel>(`${this.baseUrl}/media?slug=${slug}`);
  }

}