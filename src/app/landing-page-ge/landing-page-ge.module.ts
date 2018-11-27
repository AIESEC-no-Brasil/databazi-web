import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageGeRoutingModule } from './landing-page-ge-routing.module';
import { LandingPageMenuModule } from '../landing-page-menu/landing-page-menu.module';
import { FormGeModule } from '../form-ge/form-ge.module';
import { LandingFooterModule } from '../landing-footer/landing-footer.module';

import { LandingPageGeComponent } from './landing-page-ge.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

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
    ScrollToModule.forRoot()
  ]
})
export class LandingPageGeModule { }
