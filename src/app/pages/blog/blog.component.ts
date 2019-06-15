import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostModel } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';
import { MediaService } from 'src/app/core/services/media.service';
import { MediaModel } from 'src/app/core/models/media.model';
import { AuthorService } from 'src/app/core/services/author.service.';
import { AuthorModel } from 'src/app/core/models/AuthorModel';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public pageName: string;

  constructor(
    private title: Title,
  ) {
    this.pageName = 'Artigos';
  }

  ngOnInit() {
    this.title.setTitle(`Alt Maker Pro - ${this.pageName}`);
  }


}
