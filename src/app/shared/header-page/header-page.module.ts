import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page.component';
import { BreadcrumbsModule } from 'ng6-breadcrumbs';

@NgModule({
  declarations: [HeaderPageComponent],
  imports: [
    CommonModule,
    BreadcrumbsModule
  ],
  exports: [HeaderPageComponent],
})
export class HeaderPageModule { }
