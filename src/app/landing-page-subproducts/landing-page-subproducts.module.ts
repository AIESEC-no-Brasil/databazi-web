import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { LandingPageSubproductsComponent } from './landing-page-subproducts.component';

import { LandingPageSubproductsRoutingModule  } from './landing-page-subproducts-routing.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
  	LandingPageSubproductsComponent
  ],
  imports: [
    CommonModule,
    LandingPageSubproductsRoutingModule,
    ScrollToModule.forRoot(),
    HttpModule
  ],
  exports : [
  	LandingPageSubproductsComponent
  ],
  providers : [
  ]
})
export class LandingPageSubproductsModule { }
