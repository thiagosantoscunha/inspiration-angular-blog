import { Component, OnInit } from '@angular/core';
import { AuthorModel } from 'src/app/core/models/AuthorModel';
import { Title } from '@angular/platform-browser';
import { AuthorService } from 'src/app/core/services/author.service.';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { PostModel } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public pageName: string;
  public author: AuthorModel;
  public posts: PostModel[];
  public idAuthor: any;

  constructor(
    private title: Title,
    private authorService: AuthorService,
    private postService: PostService,
    private route: ActivatedRoute
  ) {
    this.pageName = 'Autor';
    this.title.setTitle('Alt Maker Pro - ' + this.pageName);
  }

  ngOnInit() {
    this.idAuthor = this.route.snapshot.paramMap.get('id');
    this.getPostsByAuthor();
    this.getById  ();
  }

  getPostsByAuthor() {
    console.log('getPostsByAuthor');
    this.postService.getByAuthor(this.idAuthor).subscribe((posts: PostModel[]) => {
      this.posts = posts;
    });
  }

  getById() {
    this.authorService.getById(this.idAuthor).subscribe((author: AuthorModel) => {
      this.author = author;
      console.log(this.author);
    });
  }

}
