import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import { PostListModule } from 'src/app/components/post-list/post-list.module';
import { HeaderPageModule } from 'src/app/shared/header-page/header-page.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    PostListModule,
    HeaderPageModule
  ],
  exports: [CategoryComponent],
})
export class CategoryModule { }
