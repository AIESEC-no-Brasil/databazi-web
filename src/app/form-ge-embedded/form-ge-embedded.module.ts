import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormGeEmbeddedComponent } from './form-ge-embedded.component';

import { FormGeRoutingModule } from './form-ge-embedded-routing.module';
import { TermsModule } from '../terms/terms.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SignupService } from '../services/signup.service';

@NgModule({
  declarations: [
  	FormGeEmbeddedComponent
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
    HttpModule
  ],
  exports : [
  	FormGeEmbeddedComponent,
  ],
  providers : [
    SignupService
  ]
})
export class FormGeEmbeddedModule { }
