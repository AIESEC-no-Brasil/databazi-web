import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormGtEmbeddedComponent } from './form-gt-embedded.component';
import { FormGtThankYouComponent } from './form-gt-thank-you/form-gt-thank-you.component';

import { FormGtRoutingModule } from './form-gt-embedded-routing.module'
import { TermsModule } from '../terms/terms.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SignupService } from '../services/signup.service';

@NgModule({
  declarations: [
  	FormGtEmbeddedComponent,
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
    HttpModule
  ],
  exports : [
  	FormGtEmbeddedComponent
  ],
  providers : [
    SignupService
  ]
})
export class FormGtEmbeddedModule { }
