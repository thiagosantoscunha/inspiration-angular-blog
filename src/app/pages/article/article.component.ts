import { Component, OnInit } from '@angular/core';
import { Title, DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RouterLinkActive, RouterLink, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { PostModel } from 'src/app/core/models/post.model';
import { MediaService } from 'src/app/core/services/media.service';
import { MediaModel } from 'src/app/core/models/media.model';
import { Utils } from 'src/app/core/utils/utils';
import { AuthorService } from 'src/app/core/services/author.service.';
import { AuthorModel } from 'src/app/core/models/AuthorModel';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public pageName: string;
  public post: PostModel;
  public author: AuthorModel;

  constructor(
    private title: Title,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private postService: PostService,
    private mediaSerive: MediaService,
    private authorService: AuthorService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getById(id).subscribe((post: PostModel) => {
      this.post = post;
      this.pageName = this.post.title.rendered;
      this.title.setTitle(`Alt Maker Pro - ${this.pageName}`);
      this.getPostImageById();
      this.getAuthorById();
    });
  }

  public getfeatureImage(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  public getAuthorById() {
    this.authorService.getById(this.post.author).subscribe((author: AuthorModel) => {
      this.author = author != null ? author : null;
    });
  }

  getPostImageById(): void {
    this.mediaSerive.getById(this.post.featured_media).subscribe((media: MediaModel) => {
      this.post.media = media;
    });
  }

}
