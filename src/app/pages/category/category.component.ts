import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { CategoryModel } from 'src/app/core/models/CategoryModel';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public idCategoryList: number[] = [];

  public pageName: string;

  public category: CategoryModel;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private title: Title
  ) {
    this.pageName = 'Categoria';
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('categoryId');
    this.idCategoryList.push(+id);
    this.categoryService.getById(id).subscribe((category: CategoryModel) => {
      this.category = category;
      this.title.setTitle(`${this.category.name} - Alt Maker Pro`);
    }, (err: HttpErrorResponse) => {
      console.error(`Algo aconteceu ao buscar os dados do servidor: ${err.message}`);
    }, () => {
      console.log('categoryService.getById(id).subscribe');
    });
  }

}
