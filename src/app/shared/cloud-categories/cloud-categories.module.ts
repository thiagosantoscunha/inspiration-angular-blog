import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudCategoriesComponent } from './cloud-categories.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CloudCategoriesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CloudCategoriesComponent],
})
export class CloudCategoriesModule { }
