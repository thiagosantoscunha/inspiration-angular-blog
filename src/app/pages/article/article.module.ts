import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { HeaderPageModule } from 'src/app/shared/header-page/header-page.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    HeaderPageModule,
    RouterModule
  ]
})
export class ArticleModule { }
