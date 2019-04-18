import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOfflineEmbeddedComponent } from './form-offline-embedded.component';

const routes: Routes = [
	{
    path: 'intercambio-unbounce',
    component: FormOfflineEmbeddedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormOfflineRoutingModule { }
