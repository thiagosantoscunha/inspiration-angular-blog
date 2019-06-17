import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PostModel } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';
import { CategoryModel } from 'src/app/core/models/CategoryModel';
import { CategoryService } from 'src/app/core/services/category.service';
import { MediaService } from 'src/app/core/services/media.service';
import { MediaModel } from 'src/app/core/models/media.model';

@Component({
  selector: 'app-feature-block-horizon',
  templateUrl: './feature-block-horizon.component.html',
  styleUrls: ['./feature-block-horizon.component.scss']
})
export class FeatureBlockHorizonComponent implements OnInit {

  @Input()
  public category: CategoryModel;

  @Input()
  public post: PostModel;

  constructor(
    private postService: PostService,
    private categoryService: CategoryService,
    private mediaService: MediaService
  ) {
    this.category = {
      slug: 'novidade-em-destaque'
    };
  }

  ngOnInit() {
    this.getCategoryBySlug();
  }

  public getCategoryBySlug(): void {
    this.categoryService.getBySlug(this.category.slug).subscribe((categories: CategoryModel[]) => {
      this.category = categories[0];
      this.getPostByCategoryId();
    });
  }

  public getPostByCategoryId(): void {
    if (this.post === null || this.post === undefined) {
      this.postService.getByCategoryId(this.category.id).subscribe((posts: PostModel[]) => {
        this.post = posts[0];
        this.getMediaById();
      });
    }
  }

  public getMediaById(): void {
    this.mediaService.getById(this.post.featured_media).subscribe((media: MediaModel) => {
      this.post.media = media;
    });
  }

}
