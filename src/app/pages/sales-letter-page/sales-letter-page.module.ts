import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesLetterPageComponent } from './sales-letter-page.component';
import { HeaderPageModule } from 'src/app/shared/header-page/header-page.module';

@NgModule({
  declarations: [SalesLetterPageComponent],
  imports: [
    CommonModule
  ],
  exports: [SalesLetterPageComponent],
})
export class SalesLetterPageModule { }
