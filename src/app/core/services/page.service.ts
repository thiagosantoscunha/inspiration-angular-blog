import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageModule } from 'src/app/pages/page.module';
import { PageModel } from '../models/PageModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private menu = new BehaviorSubject<boolean>(true);
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl += '/pages';
  }

  getBySlug(slug: string): Observable<PageModel[]> {
    const pages = this.http.get<PageModel[]>(`${this.baseUrl}?slug=${slug}&template=sales-letter-template.php`);
    this.menu.next(false);
    return pages;
  }

  get hasMenu() {
    return this.menu.asObservable();
  }

}
