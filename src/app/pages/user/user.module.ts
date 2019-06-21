import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderPageModule } from 'src/app/shared/header-page/header-page.module';
import { PostListModule } from 'src/app/components/post-list/post-list.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HeaderPageModule,
    PostListModule
  ],
  exports: [UserComponent],
})
export class UserModule { }
