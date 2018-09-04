import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { InputMaskModule } from 'primeng/inputmask';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { GrowlModule } from 'primeng/primeng';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageGvComponent } from './landing-page-gv/landing-page-gv.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { FormGvComponent } from './form-gv/form-gv.component';

import { routes } from './app.routing';
import { LandingPageGtComponent } from './landing-page-gt/landing-page-gt.component';
import { LandingPageGeComponent } from './landing-page-ge/landing-page-ge.component';
import { LandingPageMenuComponent } from './landing-page-menu/landing-page-menu.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageGvComponent,
    LandingFooterComponent,
    FormGvComponent,
    LandingPageGtComponent,
    LandingPageGeComponent,
    LandingPageMenuComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TextMaskModule,
    InputMaskModule,
    DragScrollModule,
    BrowserModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
    TranslateModule,
    HttpClientModule, 
    ScrollToModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }