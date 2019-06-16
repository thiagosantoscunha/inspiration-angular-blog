import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { HeaderPageModule } from 'src/app/shared/header-page/header-page.module';
import { RouterModule } from '@angular/router';
import { MetadataPostModule } from 'src/app/shared/metadata-post/metadata-post.module';
import { CloudTagsModule } from 'src/app/shared/cloud-tags/cloud-tags.module';
import { CloudCategoriesModule } from 'src/app/shared/cloud-categories/cloud-categories.module';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    HeaderPageModule,
    RouterModule,
    MetadataPostModule,
    CloudTagsModule,
    CloudCategoriesModule
  ]
})
export class ArticleModule { }
