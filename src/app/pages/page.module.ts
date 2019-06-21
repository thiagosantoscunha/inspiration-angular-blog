import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderPageModule } from '../shared/header-page/header-page.module';
import { SinglePostModule } from './single-post/single-post.module';
import { FeaturePostModule } from '../shared/feature-post/feature-post.module';
import { MetadataPostModule } from '../shared/metadata-post/metadata-post.module';
import { LastestPostsModule } from '../shared/lastest-posts/lastest-posts.module';
import { FeatureBlockModule } from '../components/feature-block/feature-block.module';
import { PostListModule } from '../components/post-list/post-list.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AboutComponent, BlogComponent],
  imports: [
    CommonModule,
    HeaderPageModule,
    SinglePostModule,
    FeaturePostModule,
    MetadataPostModule,
    LastestPostsModule,
    FeatureBlockModule,
    PostListModule,
    CategoryModule,
    UserModule
  ],
  exports: [AboutComponent, BlogComponent],
})
export class PageModule { }
