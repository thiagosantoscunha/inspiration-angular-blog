import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePostComponent } from './feature-post.component';
import { RouterModule } from '@angular/router';
import { MetadataPostModule } from 'src/app/shared/metadata-post/metadata-post.module';

@NgModule({
  declarations: [FeaturePostComponent],
  imports: [
    CommonModule,
    RouterModule,
    MetadataPostModule
  ],
  exports: [FeaturePostComponent],
})
export class FeaturePostModule { }
