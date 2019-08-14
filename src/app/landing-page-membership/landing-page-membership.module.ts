import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageMembershipRoutingModule } from './landing-page-membership-routing.module';
import { LandingPageMenuModule } from '../landing-page-menu/landing-page-menu.module';
import { LandingFooterModule } from '../landing-footer/landing-footer.module';

import { LandingPageMembershipComponent } from './landing-page-membership.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ContactListModule } from '../contact-list/contact-list.module';
import { LandingPageSubproductsModule } from '../landing-page-subproducts/landing-page-subproducts.module';
import { LandingPageCountriesModule } from '../landing-page-countries/landing-page-countries.module';
import { FormMembershipModule } from '../form-membership/form-membership.module';
import { SliderMembershipHostComponent } from '../slider-membership-host/slider-membership-host.component';

@NgModule({
  declarations: [
    // LandingPageMembershipComponent,
    // SliderMembershipHostComponent
	],
  imports: [
    CommonModule,
    LandingPageMembershipRoutingModule,
    LandingPageMenuModule,
    LandingFooterModule,
    FormMembershipModule,
    ContactListModule,
    LandingPageSubproductsModule,
    LandingPageCountriesModule,
    ScrollToModule.forRoot()
  ]
})
export class LandingPageMembershipModule { }
