import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormGpComponent } from './form-gp.component';
import { FormGpThankYouComponent } from './form-gp-thank-you/form-gp-thank-you.component';

import { FormGpRoutingModule } from './form-gp-routing.module';
import { TermsModule } from '../terms/terms.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SignupService } from '../services/signup.service';

@NgModule({
  declarations: [
  	FormGpComponent,
    FormGpThankYouComponent
  ],
  imports: [
    CommonModule,
    FormGpRoutingModule,
    TermsModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    NgxMaskModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule
  ],
  exports : [
  	FormGpComponent
  ],
  providers : [
    SignupService
  ]
})
export class FormGpModule { }
