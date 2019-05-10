import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormHostComponent } from './form-host.component';

import { FormHostRoutingModule } from './form-host-routing.module';
import { TermsModule } from '../terms/terms.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SignupService } from '../services/signup.service';
import { FormHostThankYouComponent } from './form-host-thank-you/form-host-thank-you.component';

@NgModule({
  declarations: [
  	FormHostComponent,
  	FormHostThankYouComponent
  ],
  imports: [
    CommonModule,
    FormHostRoutingModule,
    TermsModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    NgxMaskModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule
  ],
  exports : [
  	FormHostComponent
  ],
  providers : [
    SignupService
  ]
})
export class FormHostModule { }
