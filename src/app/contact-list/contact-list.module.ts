import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ContactListComponent } from './contact-list.component';

import { ContactListRoutingModule  } from './contact-list-routing.module';


@NgModule({
  declarations: [
  	ContactListComponent
  ],
  imports: [
    CommonModule,
    ContactListRoutingModule,
    HttpModule
  ],
  exports : [
  	ContactListComponent
  ],
  providers : [
  ]
})
export class ContactListModule { }
