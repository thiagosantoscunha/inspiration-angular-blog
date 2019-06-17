import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBlockHorizonComponent } from './feature-block-horizon/feature-block-horizon.component';
import { MetadataPostModule } from 'src/app/shared/metadata-post/metadata-post.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeatureBlockHorizonComponent],
  imports: [
    CommonModule,
    MetadataPostModule,
    RouterModule
  ],
  exports: [FeatureBlockHorizonComponent],
})
export class FeatureBlockModule { }
