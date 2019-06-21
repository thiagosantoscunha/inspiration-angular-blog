import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DisqusModule, DISQUS_SHORTNAME } from 'ngx-disqus';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationHeaderModule } from './shared/navigation-header/navigation-header.module';
import { PageModule } from './pages/page.module';
import { FooterModule } from './shared/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationHeaderModule,
    HttpClientModule,
    PageModule,
    FooterModule,
    DisqusModule.forRoot('ngx'),
  ],
  providers: [
    {
      provide: DISQUS_SHORTNAME,
      useValue: 'altmakerpro'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
