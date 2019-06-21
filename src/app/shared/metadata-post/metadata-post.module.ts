import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetadataPostComponent } from './metadata-post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MetadataPostComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MetadataPostComponent],
})
export class MetadataPostModule { }
