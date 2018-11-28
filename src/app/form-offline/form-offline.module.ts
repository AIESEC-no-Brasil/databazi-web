import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { FormOfflineRoutingModule } from './form-offline-routing.module';

import { FormOfflineComponent } from './form-offline.component';

import { FormGvModule } from '../form-gv/form-gv.module';
import { FormGtModule } from '../form-gt/form-gt.module';
import { FormGeModule } from '../form-ge/form-ge.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
  	FormOfflineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormOfflineRoutingModule,
    FormGvModule,
    FormGtModule,
    FormGeModule,
    ScrollToModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  exports : [
  	FormOfflineComponent
  ]
})
export class FormOfflineModule { }
