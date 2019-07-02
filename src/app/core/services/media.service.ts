import { Injectable } from '@angular/core';
import { MediaModel } from '../models/media.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl += '/media';
  }

  public getBySlug(slug: string = 'logotipo'): Observable<MediaModel> {
    return this.http.get<MediaModel>(`${this.baseUrl}?slug=${slug}`);
  }

  public getById(id: any): Observable<MediaModel> {
    return this.http.get<MediaModel>(`${this.baseUrl}/${id}`);
  }

}
