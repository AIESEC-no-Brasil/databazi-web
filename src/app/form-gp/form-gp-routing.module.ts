import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGpComponent } from './form-gp.component';
import { FormGpThankYouComponent } from './form-gp-thank-you/form-gp-thank-you.component';

const routes: Routes = [
	{
    path: '',
    component: FormGpComponent
  },
  {
    path: 'obrigado',
    component: FormGpThankYouComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGpRoutingModule { }
