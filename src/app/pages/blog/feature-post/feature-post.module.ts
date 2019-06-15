import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePostComponent } from './feature-post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeaturePostComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FeaturePostComponent],
})
export class FeaturePostModule { }
