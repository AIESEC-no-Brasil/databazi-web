import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { LandingPageHostRoutingModule } from './landing-page-host-routing.module';
import { LandingPageMenuModule } from '../landing-page-menu/landing-page-menu.module';
import { FormGtModule } from '../form-gt/form-gt.module';
import { LandingFooterModule } from '../landing-footer/landing-footer.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
	],
  imports: [
    CommonModule,
    LandingPageHostRoutingModule,
    LandingPageMenuModule,
    LandingFooterModule,
    FormsModule,
    FormGtModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot()
  ]
})
export class LandingPageHostModule { }
