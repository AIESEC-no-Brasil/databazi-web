import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageHostComponent } from './landing-page-host.component';

const routes: Routes = [
	{
    path: 'lar-global',
    component: LandingPageHostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageHostRoutingModule { }
