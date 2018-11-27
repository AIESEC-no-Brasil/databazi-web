import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOfflineComponent } from './form-offline.component';

const routes: Routes = [
	{
    path: '',
    component: FormOfflineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormOfflineRoutingModule { }
