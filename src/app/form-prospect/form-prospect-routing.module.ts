import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormProspectComponent } from './form-prospect.component';

const routes: Routes = [
	{
    path: 'prospect',
    component: FormProspectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormProspectRoutingModule { }
