import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormHostComponent } from './form-host.component';

const routes: Routes = [
	{
    path: '',
    component: FormHostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormHostRoutingModule { }
