import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastestPostsComponent } from './lastest-posts.component';
import { MetadataPostModule } from '../metadata-post/metadata-post.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LastestPostsComponent],
  imports: [
    CommonModule,
    MetadataPostModule,
    RouterModule
  ],
  exports: [LastestPostsComponent],
})
export class LastestPostsModule { }
