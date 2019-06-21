import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialSharedComponent } from './social-shared.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';

@NgModule({
  declarations: [SocialSharedComponent],
  imports: [
    CommonModule,
    HttpClientJsonpModule,
    ShareButtonsModule.forRoot()
  ],
  exports: [SocialSharedComponent],
})
export class SocialSharedModule { }
