import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { FormProspectRoutingModule } from './form-prospect-routing.module';
import { FormProspectComponent } from './form-prospect.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxMaskModule } from 'ngx-mask';

import { TermsModule } from '../terms/terms.module';

@NgModule({
  declarations: [
  	FormProspectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormProspectRoutingModule,
    ScrollToModule.forRoot(),
    NgxMaskModule.forRoot(),
    TermsModule
  ],
  exports : [
  	FormProspectComponent
  ]
})
export class FormProspectModule { }
