import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingFooterComponent } from './landing-footer.component';

@NgModule({
  declarations: [
  	LandingFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
  	LandingFooterComponent
  ]
})
export class LandingFooterModule { }
