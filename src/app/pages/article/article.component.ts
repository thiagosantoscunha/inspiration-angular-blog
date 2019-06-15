import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public pageName: string;

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.pageName = 'Nome do artigo vindo do banco';
    this.title.setTitle(`Alt Maker Pro - ${this.pageName}`);
  }

}
