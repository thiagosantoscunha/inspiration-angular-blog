import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { MetadataPostModule } from 'src/app/shared/metadata-post/metadata-post.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MetadataPostModule
  ],
  exports: [PostListComponent],
})
export class PostListModule { }
