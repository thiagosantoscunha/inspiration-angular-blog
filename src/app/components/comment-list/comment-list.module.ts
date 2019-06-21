import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';
import { CommentService } from 'src/app/core/services/comment.service';
import { DisqusModule } from 'ngx-disqus';

@NgModule({
  declarations: [CommentListComponent],
  imports: [
    CommonModule,
    DisqusModule
  ],
  exports: [CommentListComponent],
  providers: [CommentService]
})
export class CommentListModule { }
