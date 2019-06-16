import { Component, OnInit, Input } from '@angular/core';
import { AuthorModel } from 'src/app/core/models/AuthorModel';

@Component({
  selector: 'app-metadata-post',
  templateUrl: './metadata-post.component.html',
  styleUrls: ['./metadata-post.component.scss']
})
export class MetadataPostComponent implements OnInit {

  @Input()
  public author: AuthorModel;

  @Input()
  public date: Date;

  constructor() {
  }

  ngOnInit() {
  }

}
