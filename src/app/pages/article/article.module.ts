import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { HeaderPageModule } from 'src/app/shared/header-page/header-page.module';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    HeaderPageModule
  ]
})
export class ArticleModule { }
