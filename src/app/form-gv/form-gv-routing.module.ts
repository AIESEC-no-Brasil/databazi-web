import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGvComponent } from './form-gv.component';
import { FormGvThankYouComponent } from './form-gv-thank-you/form-gv-thank-you.component';

const routes: Routes = [
	{
    path: '',
    component: FormGvComponent
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
export class FormGvRoutingModule { }
