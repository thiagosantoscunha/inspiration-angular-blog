import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment.service';
import { CommentModel } from 'src/app/core/models/CommentModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnChanges {

  @Input()
  public idPost: any;

  constructor(private commentService: CommentService) {
  }

  ngOnChanges() {
  }

}
