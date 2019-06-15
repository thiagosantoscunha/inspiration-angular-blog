import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './navigation-header.component';
import { MediaService } from 'src/app/core/services/media.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [MediaService],
  exports: [
    NavigationHeaderComponent
  ]
})
export class NavigationHeaderModule { }
