import { Component, OnInit, Input, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {


  @Input()
  public title = '';

  constructor() {
  }

}
