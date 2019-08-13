import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageMembershipComponent } from './landing-page-membership.component';

const routes: Routes = [
	{
    path: '',
    component: LandingPageMembershipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageMembershipRoutingModule { }
