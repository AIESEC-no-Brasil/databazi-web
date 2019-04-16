import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGtEmbeddedComponent } from './form-gt-embedded.component';
import { FormGtThankYouComponent } from './form-gt-thank-you/form-gt-thank-you.component';

const routes: Routes = [
	{
    path: 'talento-global-unbounce',
    component: FormGtEmbeddedComponent
  },
  {
    path: 'obrigado',
    component: FormGtThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGtRoutingModule { }
