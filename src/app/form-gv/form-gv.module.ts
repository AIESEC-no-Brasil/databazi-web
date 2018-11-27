import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormGvComponent } from './form-gv.component';
import { FormGvThankYouComponent } from './form-gv-thank-you/form-gv-thank-you.component';

import { FormGvRoutingModule } from './form-gv-routing.module';
import { TermsModule } from '../terms/terms.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SignupService } from '../services/signup.service';

@NgModule({
  declarations: [
  	FormGvComponent,
    FormGvThankYouComponent
  ],
  imports: [
    CommonModule,
    FormGvRoutingModule,
    TermsModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    NgxMaskModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule
  ],
  exports : [
  	FormGvComponent
  ],
  providers : [
    SignupService
  ]
})
export class FormGvModule { }
