import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterLink, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { PostModel } from 'src/app/core/models/post.model';
import { MediaService } from 'src/app/core/services/media.service';
import { MediaModel } from 'src/app/core/models/media.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public pageName: string;
  public post: PostModel;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private postService: PostService,
    private mediaSerive: MediaService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.postService.getById(id).subscribe((post: PostModel) => {
      this.post = post;
      console.log(this.post);
      this.pageName = this.post.title.rendered;
      this.title.setTitle(`Alt Maker Pro - ${this.pageName}`);
      this.getPostImageById();
    });
  }

  getPostImageById(): void {
    this.mediaSerive.getById(this.post.featured_media).subscribe((media: MediaModel) => {
      this.post.media = media;
    });
  }

}
