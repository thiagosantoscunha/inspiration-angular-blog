import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public pageName: string;

  constructor(private title: Title) {
    this.pageName = 'Sobre';
  }

  ngOnInit() {
    this.title.setTitle(`Alt Maker Pro - ${this.pageName}`);
  }

}
