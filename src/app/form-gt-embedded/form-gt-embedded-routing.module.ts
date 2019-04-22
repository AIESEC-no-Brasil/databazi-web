import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGtEmbeddedComponent } from './form-gt-embedded.component';

const routes: Routes = [
	{
    path: 'talento-global-unbounce',
    component: FormGtEmbeddedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGtRoutingModule { }
