import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { LandingPageCountriesComponent } from './landing-page-countries.component';

import { LandingPageCountriesRoutingModule  } from './landing-page-countries-routing.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
  	LandingPageCountriesComponent
  ],
  imports: [
    CommonModule,
    LandingPageCountriesRoutingModule,
    HttpModule,
    ScrollToModule.forRoot()
  ],
  exports : [
  	LandingPageCountriesComponent
  ],
  providers : [
  ]
})
export class LandingPageCountriesModule { }
