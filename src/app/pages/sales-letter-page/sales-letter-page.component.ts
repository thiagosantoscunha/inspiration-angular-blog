import { Component, OnInit, Sanitizer } from '@angular/core';
import { PageService } from 'src/app/core/services/page.service';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageModel } from 'src/app/core/models/PageModel';
import { MediaService } from 'src/app/core/services/media.service';
import { MediaModel } from 'src/app/core/models/media.model';
import { AuthorService } from 'src/app/core/services/author.service.';
import { AuthorModel } from 'src/app/core/models/AuthorModel';

@Component({
  selector: 'app-sales-letter-page',
  templateUrl: './sales-letter-page.component.html',
  styleUrls: ['./sales-letter-page.component.scss']
})
export class SalesLetterPageComponent implements OnInit {

  private slug = '';
  public page: PageModel;
  public media: MediaModel;
  public author: AuthorModel;

  constructor(
    private pageService: PageService,
    private mediaService: MediaService,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.getPageBySlug();
  }

  private getMediaById() {
    this.mediaService.getById(this.page.featured_media).subscribe((media: MediaModel) => {
      this.media = media;
    });
  }

  private getPageBySlug() {
    this.pageService.getBySlug(this.slug).subscribe((pages: PageModel[]) => {
      this.page = pages[0];
      this.getMediaById();
      this.getAuthorById();
    });
  }

  private getAuthorById() {
    this.authorService.getById(this.page.author).subscribe((author: AuthorModel) => {
      this.author = author;
    });
  }

  public getImage(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  public getAuthorImage(author: AuthorModel) {
    return this.author.avatar_urls['96'];
  }
}
