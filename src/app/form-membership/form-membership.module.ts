import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormMembershipComponent } from './form-membership.component';
import { FormMembershipThankYouComponent } from './form-membership-thank-you/form-membership-thank-you.component';

import { FormMembershipRoutingModule } from './form-membership-routing.module';
import { TermsModule } from '../terms/terms.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxMaskModule } from 'ngx-mask';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SignupService } from '../services/signup.service';

@NgModule({
  declarations: [
  	FormMembershipComponent,
    FormMembershipThankYouComponent
  ],
  imports: [
    CommonModule,
    FormMembershipRoutingModule,
    TermsModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    NgxMaskModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule
  ],
  exports : [
  	FormMembershipComponent
  ],
  providers : [
    SignupService
  ]
})
export class FormMembershipModule { }
