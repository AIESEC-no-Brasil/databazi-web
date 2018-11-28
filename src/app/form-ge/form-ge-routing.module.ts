import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGeComponent } from './form-ge.component';
import { FormGeThankYouComponent } from './form-ge-thank-you/form-ge-thank-you.component';

const routes: Routes = [
	{
    path: '',
    component: FormGeComponent
  },
  {
    path: 'obrigado',
    component: FormGeThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGeRoutingModule { }
