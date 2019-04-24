import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormOfflineEmbeddedComponent } from './form-offline-embedded.component';

import { FormOfflineRoutingModule } from './form-offline-embedded-routing.module'
import { TermsModule } from '../terms/terms.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SignupService } from '../services/signup.service';

@NgModule({
  declarations: [
  	FormOfflineEmbeddedComponent
  ],
  imports: [
    CommonModule,
    FormOfflineRoutingModule,
    TermsModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    NgxMaskModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule
  ],
  exports : [
  	FormOfflineEmbeddedComponent
  ],
  providers : [
    SignupService
  ]
})
export class FormOfflineEmbeddedModule { }
