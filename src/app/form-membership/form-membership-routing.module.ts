import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMembershipThankYouComponent } from './form-membership-thank-you/form-membership-thank-you.component';

const routes: Routes = [
  {
    path: 'obrigado',
    component: FormMembershipThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMembershipRoutingModule { }
