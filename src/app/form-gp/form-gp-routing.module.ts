import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGpComponent } from './form-gp.component';

const routes: Routes = [
	{
    path: '',
    component: FormGpComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGpRoutingModule { }
