import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderPageModule } from '../shared/header-page/header-page.module';
import { ArticleModule } from './article/article.module';
import { FeaturePostModule } from './blog/feature-post/feature-post.module';

@NgModule({
  declarations: [AboutComponent, BlogComponent],
  imports: [
    CommonModule,
    HeaderPageModule,
    ArticleModule,
    FeaturePostModule
  ],
  exports: [AboutComponent, BlogComponent],
})
export class PageModule { }
