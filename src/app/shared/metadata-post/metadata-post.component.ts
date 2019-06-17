import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AuthorModel } from 'src/app/core/models/AuthorModel';
import { AuthorService } from 'src/app/core/services/author.service.';

@Component({
  selector: 'app-metadata-post',
  templateUrl: './metadata-post.component.html',
  styleUrls: ['./metadata-post.component.scss']
})
export class MetadataPostComponent implements OnChanges {

  @Input()
  public authorId: number;

  @Input()
  public date: Date;

  @Input()
  public alignItems: string;

  public author: AuthorModel;

  constructor(private authorService: AuthorService) {
    this.alignItems = '';
  }

  ngOnChanges() {
    this.authorService.getById(this.authorId).subscribe((author: AuthorModel) => {
      this.author = author;
    });
  }

}
