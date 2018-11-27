import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsComponent } from './terms.component';

@NgModule({
  declarations: [
  	TermsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
  	TermsComponent
  ]
})
export class TermsModule { }
