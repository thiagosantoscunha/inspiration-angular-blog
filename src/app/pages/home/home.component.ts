import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/core/services/media.service';
import { Observable } from 'rxjs';
import { MediaModel } from 'src/app/core/models/media.model';
import { DomSanitizer } from '@angular/platform-browser';
import { PageService } from 'src/app/core/services/page.service';
import { PageModel } from 'src/app/core/models/PageModel';
import { faCoffee, faFlask, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./header.scss', './home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * Medias vars
   */
  public bgSlider: MediaModel;
  public logo: MediaModel;
  public imgTeachers: MediaModel;
  public bgHowItWorks: MediaModel;
  public bgTestemony: MediaModel;
  public bgRomuloMarconi: MediaModel;
  public bgCida: MediaModel;
  public bgBruno: MediaModel;

  public page: PageModel;
  public icons = [ faFlask, faFileAlt ];

  constructor(private mediaService: MediaService, private sanitizer: DomSanitizer, private pageService: PageService) { }

  ngOnInit() {
    this.getPage();
    this.getMedias();
  }

  private getMedias(): void {
    this.getBackgroundMedia();
    this.getLogo();
    this.getTeachersMedia();
    this.getBgHowItWorks();
    this.getBgTestemony();
    this.getRomuloBg();
    this.getBgBruno();
    this.getBgCida();
  }

  private getBgCida(): void {
    this.mediaService.getBySlug('cida-leal').subscribe((media: MediaModel) => {
      this.bgCida = media[0];
    });
  }
  private getBgBruno(): void {
    this.mediaService.getBySlug('bruno-breda').subscribe((media: MediaModel) => {
      this.bgBruno = media[0];
    });
  }
  private getRomuloBg(): void {
    this.mediaService.getBySlug('romulo-marconi').subscribe((media: MediaModel) => {
      this.bgRomuloMarconi = media[0];
    });
  }

  private getBgTestemony(): void {
    this.mediaService.getBySlug('bg-testemony').subscribe((media: MediaModel) => {
      this.bgTestemony = media[0];
    });
  }

  private getBgHowItWorks(): void {
    this.mediaService.getBySlug('how-it-works').subscribe((media: MediaModel) => {
      this.bgHowItWorks = media[0];
    });
  }

  private getPage(): void {
    this.pageService.getBySlug('home').subscribe((pages: PageModel[]) => {
      this.page = pages[0];
    });
  }

  private getBackgroundMedia(): void {
    this.mediaService.getBySlug('bg-main').subscribe((media: MediaModel) => {
      this.bgSlider = media[0];
    });
  }

  private getLogo(): void {
    this.mediaService.getBySlug('altmakerproArtboard-1').subscribe((media: MediaModel) => {
      this.logo = media[0];
    });
  }

  private getTeachersMedia(): void {
    this.mediaService.getBySlug('professores').subscribe((media: MediaModel) => {
      this.imgTeachers = media[0];
    });
  }

  public getMediaSerialized(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
