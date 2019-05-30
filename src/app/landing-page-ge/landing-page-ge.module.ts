import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageGeRoutingModule } from './landing-page-ge-routing.module';
import { LandingPageMenuModule } from '../landing-page-menu/landing-page-menu.module';
import { FormGeModule } from '../form-ge/form-ge.module';
import { LandingFooterModule } from '../landing-footer/landing-footer.module';

import { LandingPageGeComponent } from './landing-page-ge.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ContactListModule } from '../contact-list/contact-list.module';
import { LandingPageCountriesModule } from '../landing-page-countries/landing-page-countries.module';

@NgModule({
  declarations: [
  	LandingPageGeComponent
	],
  imports: [
    CommonModule,
    LandingPageGeRoutingModule,
    LandingPageMenuModule,
    LandingFooterModule,
    FormGeModule,
    ContactListModule,
    LandingPageCountriesModule,
    ScrollToModule.forRoot()
  ]
})
export class LandingPageGeModule { }
