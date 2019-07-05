import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormGtComponent } from './form-gt.component';
import { FormGtThankYouComponent } from './form-gt-thank-you/form-gt-thank-you.component';

import { FormGtRoutingModule } from './form-gt-routing.module';
import { TermsModule } from '../terms/terms.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SignupService } from '../services/signup.service';

import { FilePondModule } from 'ngx-filepond';


@NgModule({
  declarations: [
  	FormGtComponent,
    FormGtThankYouComponent
  ],
  imports: [
    CommonModule,
    FormGtRoutingModule,
    TermsModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    NgxMaskModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule,
    FilePondModule
  ],
  exports : [
  	FormGtComponent
  ],
  providers : [
    SignupService
  ]
})
export class FormGtModule { }
