import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input()
  public category: string;

  public posts: Array<PostModel>;

  constructor(private postService: PostService) {
    this.category = 'all';
  }

  ngOnInit() {
    switch (this.category) {
      case 'all':
        this.getPosts();
        break;
      default:
        console.log('Não foi possível selecionar a categoria de post ' + this.category + ' para a listagem');
    }
  }

  public getPosts(): void {
    this.postService.getAll().subscribe((posts: PostModel[]) => {
      if (this.posts !== null || this.posts !== undefined) {
        this.posts = posts;
      }
    });
  }

}
