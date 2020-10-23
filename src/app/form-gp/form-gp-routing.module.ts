import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGpComponent } from './form-gp.component';
// import { FormGtThankYouComponent } from './form-gt-thank-you/form-gt-thank-you.component';

const routes: Routes = [
	{
    path: 'formulario-talento-global',
    component: FormGpComponent
  },
  // {
  //   path: 'obrigado',
  //   component: FormGtThankYouComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGpRoutingModule { }
