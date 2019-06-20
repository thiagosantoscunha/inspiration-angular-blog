import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/core/services/media.service';
import { MediaModel } from 'src/app/core/models/media.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public media: MediaModel;

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getBySlug('altmakerproartboard-1').subscribe((medias) => {
      this.media = medias[0];
    });
  }

}
