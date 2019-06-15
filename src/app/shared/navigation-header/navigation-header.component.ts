import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/core/services/media.service';
import { MediaModel } from 'src/app/core/models/media.model';
import { NavModel } from './nav.model';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

  public logo: MediaModel;
  public brandName: string = 'AltMakerPro';
  public navItems: NavModel[];

  constructor(private _mediaService: MediaService) {
    this.navItems = [
      {
        name: 'Início',
        slug: '/artigos'
      },
      {
        name: 'Sobre',
        slug: '/sobre'
      }
    ];
  }

  ngOnInit() {
    this._mediaService.getBySlug('altmakerproartboard-1').subscribe((medias) => this.logo = medias[0]);
  }

}
