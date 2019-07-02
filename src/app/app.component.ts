import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageService } from './core/services/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hasMenu$: Observable<boolean>;

  constructor(private pageService: PageService) {
  }

  ngOnInit(): void {
    this.hasMenu$ = this.pageService.hasMenu;
  }

}
