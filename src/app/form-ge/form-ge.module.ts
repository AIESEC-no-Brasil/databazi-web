import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormGeComponent } from './form-ge.component';
import { FormGeThankYouComponent } from './form-ge-thank-you/form-ge-thank-you.component';

import { FormGeRoutingModule } from './form-ge-routing.module';
import { TermsModule } from '../terms/terms.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SignupService } from '../services/signup.service';

import { FilePondModule } from 'ngx-filepond';

@NgModule({
  declarations: [
  	FormGeComponent,
    FormGeThankYouComponent
  ],
  imports: [
    CommonModule,
    FormGeRoutingModule,
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
  	FormGeComponent,
  ],
  providers : [
    SignupService
  ]
})
export class FormGeModule { }
