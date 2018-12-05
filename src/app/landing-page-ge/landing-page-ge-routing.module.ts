import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageGeComponent } from './landing-page-ge.component';

const routes: Routes = [
	{
    path: '',
    component: LandingPageGeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageGeRoutingModule { }
