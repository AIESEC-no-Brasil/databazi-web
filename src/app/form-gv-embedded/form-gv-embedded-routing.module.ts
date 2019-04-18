import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGvEmbeddedComponent } from './form-gv-embedded.component';

const routes: Routes = [
	{
    path: 'voluntario-global-unbounce',
    component: FormGvEmbeddedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGvEmbeddedRoutingModule { }
