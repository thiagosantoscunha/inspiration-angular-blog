import { Component, OnInit, OnChanges } from '@angular/core';
import { PostModel } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';
import { MediaService } from 'src/app/core/services/media.service';
import { MediaModel } from 'src/app/core/models/media.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lastest-posts',
  templateUrl: './lastest-posts.component.html',
  styleUrls: ['./lastest-posts.component.scss']
})
export class LastestPostsComponent implements OnInit, OnChanges {

  public recentPosts: Array<PostModel>;

  constructor(
    private postService: PostService,
    private mediaService: MediaService
  ) { }

  ngOnInit() {
    this.getLatestPosts();
  }

  ngOnChanges() {
  }

  public getLatestPosts(): void {
    this.postService.getPostWithLimit(2).subscribe((posts: PostModel[]) => {
      this.recentPosts = posts;
      this.getMediaById();
    });
  }

  public getMediaById(): void {
    for (const post of this.recentPosts) {
      this.mediaService.getById(post.featured_media).subscribe((media: MediaModel) => {
        post.media = media;
      }, (error: HttpErrorResponse) => {
          console.error(error.message);
      });
    }
  }

}
