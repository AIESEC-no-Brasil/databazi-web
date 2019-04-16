import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGeEmbeddedComponent } from './form-ge-embedded.component';
import { FormGeThankYouComponent } from './form-ge-thank-you/form-ge-thank-you.component';

const routes: Routes = [
	{
    path: 'empreendedor-global-unbounce',
    component: FormGeEmbeddedComponent
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
