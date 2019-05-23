import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageGtRoutingModule } from './landing-page-gt-routing.module';
import { LandingPageMenuModule } from '../landing-page-menu/landing-page-menu.module';
import { FormGtModule } from '../form-gt/form-gt.module';
import { LandingFooterModule } from '../landing-footer/landing-footer.module';

import { LandingPageGtComponent } from './landing-page-gt.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ContactListModule } from '../contact-list/contact-list.module';
import { LandingPageSubproductsModule } from '../landing-page-subproducts/landing-page-subproducts.module';
import { LandingPageCountriesModule } from '../landing-page-countries/landing-page-countries.module';

@NgModule({
  declarations: [
  	LandingPageGtComponent
	],
  imports: [
    CommonModule,
    LandingPageGtRoutingModule,
    LandingPageMenuModule,
    LandingFooterModule,
    FormGtModule,
    ContactListModule,
    LandingPageSubproductsModule,
    LandingPageCountriesModule,
    ScrollToModule.forRoot()
  ]
})
export class LandingPageGtModule { }
