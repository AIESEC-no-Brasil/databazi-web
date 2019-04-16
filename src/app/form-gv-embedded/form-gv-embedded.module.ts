import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormGvEmbeddedComponent } from './form-gv-embedded.component';
import { FormGvThankYouComponent } from './form-gv-thank-you/form-gv-thank-you.component';

import { FormGvEmbeddedRoutingModule } from './form-gv-embedded-routing.module';
import { TermsModule } from '../terms/terms.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SignupService } from '../services/signup.service';

@NgModule({
  declarations: [
  	FormGvEmbeddedComponent,
    FormGvThankYouComponent
  ],
  imports: [
    CommonModule,
    FormGvEmbeddedRoutingModule,
    TermsModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    NgxMaskModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule
  ],
  exports : [
  	FormGvEmbeddedComponent
  ],
  providers : [
    SignupService
  ]
})
export class FormGvEmbeddedModule { }
