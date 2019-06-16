import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudCategoriesComponent } from './cloud-categories.component';

@NgModule({
  declarations: [CloudCategoriesComponent],
  imports: [
    CommonModule
  ],
  exports: [CloudCategoriesComponent],
})
export class CloudCategoriesModule { }
