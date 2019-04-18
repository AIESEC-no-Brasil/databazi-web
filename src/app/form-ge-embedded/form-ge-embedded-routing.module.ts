import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGeEmbeddedComponent } from './form-ge-embedded.component';

const routes: Routes = [
	{
    path: 'empreendedor-global-unbounce',
    component: FormGeEmbeddedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGeRoutingModule { }
