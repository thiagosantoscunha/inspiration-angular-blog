import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PostModel } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';
import { CategoryModel } from 'src/app/core/models/CategoryModel';
import { runInThisContext } from 'vm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnChanges {

  @Input()
  public category: any;

  @Input()
  public relatedPosts: number[] = [];

  @Input()
  public postReferenceId: any;

  public posts: Array<PostModel>;

  constructor(private postService: PostService, private router: Router) {
    this.category = '';
  }

  ngOnChanges() {
    if (this.category === 'all') {
      this.getAll();
      return;
    }
    this.getByCategories();
  }

  public getAll(): void {
    this.postService.getAll().subscribe((posts: PostModel[]) => {
      if (this.posts !== null || this.posts !== undefined) {
        this.posts = posts;
      }
    });
  }

  public getByCategories(): void {
    this.postService.getByCategories(this.relatedPosts).subscribe((posts: PostModel[]) => {
      this.posts = posts.filter((p: PostModel) => {
        return p.id !== this.postReferenceId;
      });
    });
  }

  public goToArticle(id: any) {
    this.router.navigateByUrl('/artigos', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/artigos', id]);
    });
  }

}
