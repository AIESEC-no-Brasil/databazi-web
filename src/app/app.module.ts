import * as Sentry from "@sentry/browser";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { GrowlModule } from 'primeng/primeng';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { routes } from './app.routing';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { TermsModule } from '../app/terms/terms.module';

import { NgxMaskModule } from 'ngx-mask';

import { LandingPageHostModule } from './landing-page-host/landing-page-host.module';
import { LandingPageMenuModule } from './landing-page-menu/landing-page-menu.module';
import { LandingFooterModule } from './landing-footer/landing-footer.module';
import { LandingPageHostComponent } from './landing-page-host/landing-page-host.component';
import { FormHostModule } from "./form-host/form-host.module";
import { FormGvEmbeddedModule } from './form-gv-embedded/form-gv-embedded.module';
import { FormGtEmbeddedModule } from "./form-gt-embedded/form-gt-embedded.module";
import { FormGeEmbeddedModule } from "./form-ge-embedded/form-ge-embedded.module";
import { FormOfflineEmbeddedModule } from "./form-offline-embedded/form-offline-embedded.module";
import { ContactListModule } from "./contact-list/contact-list.module";
import { ContactListComponent } from './contact-list/contact-list.component';
import { SliderMembershipHostComponent } from './slider-membership-host/slider-membership-host.component';
import { LandingPageSubproductsModule } from "./landing-page-subproducts/landing-page-subproducts.module";
import { LandingPageCountriesComponent } from './landing-page-countries/landing-page-countries.component';
import { LandingPageCountriesModule } from "./landing-page-countries/landing-page-countries.module";
import { LandingPageMembershipComponent } from './landing-page-membership/landing-page-membership.component';
import { FormMembershipModule } from "./form-membership/form-membership.module";
import { FormProspectComponent } from './form-prospect/form-prospect.component';
import { FormGpComponent } from './form-gp/form-gp.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export class BaluHammerConfig extends HammerGestureConfig {
  overrides = {
      pan: {
           direction: 6
    },
    pinch: {
        enable: false
    },
    rotate: {
        enable: false
    }
};
}

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageHostComponent,
    SliderMembershipHostComponent,
    LandingPageMembershipComponent,
    FormProspectComponent,
    FormGpComponent
  ],
  imports: [
    BrowserModule,
    routes,
    DragScrollModule,
    BrowserModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
    TranslateModule,
    HttpClientModule,
    TermsModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ScrollToModule.forRoot(),
    NgxMaskModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LandingPageMenuModule,
    LandingFooterModule,
    LandingPageHostModule,
    FormHostModule,
    FormGvEmbeddedModule,
    FormGtEmbeddedModule,
    FormGeEmbeddedModule,
    FormOfflineEmbeddedModule,
    FormMembershipModule,
    ContactListModule,
    LandingPageSubproductsModule,
    LandingPageCountriesModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: BaluHammerConfig
    },
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
