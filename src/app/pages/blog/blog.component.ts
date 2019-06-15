import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public pageName: string;

  constructor(private title: Title) {
    this.pageName = 'Artigos';
  }

  ngOnInit() {
    this.title.setTitle(`Alt Maker Pro - ${this.pageName}`);
  }

}
