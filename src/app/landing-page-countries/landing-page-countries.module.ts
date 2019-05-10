import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { LandingPageCountriesComponent } from './landing-page-countries.component';

import { LandingPageCountriesRoutingModule  } from './landing-page-countries-routing.module';


@NgModule({
  declarations: [
  	LandingPageCountriesComponent
  ],
  imports: [
    CommonModule,
    LandingPageCountriesRoutingModule,
    HttpModule
  ],
  exports : [
  	LandingPageCountriesComponent
  ],
  providers : [
  ]
})
export class LandingPageCountriesModule { }
