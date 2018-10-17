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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageGvComponent } from './landing-page-gv/landing-page-gv.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { FormGvComponent } from './form-gv/form-gv.component';

import { routes } from './app.routing';
import { LandingPageGtComponent } from './landing-page-gt/landing-page-gt.component';
import { LandingPageGeComponent } from './landing-page-ge/landing-page-ge.component';
import { LandingPageMenuComponent } from './landing-page-menu/landing-page-menu.component';
import { FormGtComponent } from './form-gt/form-gt.component';
import { FormGeComponent } from './form-ge/form-ge.component';
import { FormOfflineComponent } from './form-offline/form-offline.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask'

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
    LandingPageMenuComponent,
    FormGtComponent,
    FormGeComponent,
    FormOfflineComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
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
    NgxMaskModule.forRoot(),
    ScrollToModule.forRoot(),
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    FormOfflineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }