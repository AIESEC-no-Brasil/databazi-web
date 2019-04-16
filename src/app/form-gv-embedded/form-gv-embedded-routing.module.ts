import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGvEmbeddedComponent } from './form-gv-embedded.component';
import { FormGvThankYouComponent } from './form-gv-thank-you/form-gv-thank-you.component';

const routes: Routes = [
	{
    path: 'voluntario-global-unbounce',
    component: FormGvEmbeddedComponent
  },
  {
    path: 'obrigado',
    component: FormGvThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGvEmbeddedRoutingModule { }
