import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageMenuComponent } from './landing-page-menu.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
  	LandingPageMenuComponent
  ],
  imports: [
    CommonModule,
    ScrollToModule.forRoot()
  ],
  exports : [
  	LandingPageMenuComponent
  ]
})
export class LandingPageMenuModule { }
