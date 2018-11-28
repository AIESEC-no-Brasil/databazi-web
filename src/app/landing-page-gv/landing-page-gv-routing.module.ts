import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageGvComponent } from './landing-page-gv.component';

const routes: Routes = [
	{
    path: '',
    component: LandingPageGvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageGvRoutingModule { }
