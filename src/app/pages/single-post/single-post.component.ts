import { Component, OnInit } from '@angular/core';
import { Title, DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RouterLinkActive, RouterLink, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { PostModel } from 'src/app/core/models/post.model';
import { MediaService } from 'src/app/core/services/media.service';
import { MediaModel } from 'src/app/core/models/media.model';
import { AuthorModel } from 'src/app/core/models/AuthorModel';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  public pageName: string;
  public post: PostModel;
  public author: AuthorModel;

  constructor(
    private title: Title,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private postService: PostService,
    private mediaSerive: MediaService
  ) {
  }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log(slug);
    this.postService.getBySlug(slug).subscribe((posts: PostModel[]) => {
      this.post = posts[0];
      this.pageName = '';
      this.title.setTitle(`Alt Maker Pro - ${this.pageName}`);
      this.getPostImageById();
    });
  }

  public getfeatureImage(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  getPostImageById(): void {
    this.mediaSerive.getById(this.post.featured_media).subscribe((media: MediaModel) => {
      this.post.media = media;
    });
  }

}
