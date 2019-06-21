import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/core/models/post.model';
import { MediaModel } from 'src/app/core/models/media.model';
import { AuthorModel } from 'src/app/core/models/AuthorModel';
import { Title } from '@angular/platform-browser';
import { PostService } from 'src/app/core/services/post.service';
import { MediaService } from 'src/app/core/services/media.service';
import { AuthorService } from 'src/app/core/services/author.service.';

@Component({
  selector: 'app-feature-post',
  templateUrl: './feature-post.component.html',
  styleUrls: ['./feature-post.component.scss']
})
export class FeaturePostComponent implements OnInit {

  public stickyPost: PostModel;
  public featureMedia: MediaModel;
  public featureAuthor: AuthorModel;

  constructor(
    private postService: PostService,
    private mediaService: MediaService,
    private authorService: AuthorService
  ) {
  }

  ngOnInit() {
    this.postService.getSticky().subscribe((posts: PostModel[]) => {
      this.stickyPost = posts[0];
      this.getFeatureMedia();
      this.getAutorById();
    });
  }


  public getFeatureMedia(): void {
    this.mediaService.getById(this.stickyPost.featured_media).subscribe((media: MediaModel) => {
      this.featureMedia = media;
    });
  }

  public getAutorById(): void {
    this.authorService.getById(this.stickyPost.author).subscribe((author: AuthorModel) => {
      this.featureAuthor = author;
    });
  }

}
