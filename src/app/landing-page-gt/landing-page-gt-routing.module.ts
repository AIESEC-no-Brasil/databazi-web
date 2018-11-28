import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageGtComponent } from './landing-page-gt.component';

const routes: Routes = [
	{
    path: '',
    component: LandingPageGtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageGtRoutingModule { }
