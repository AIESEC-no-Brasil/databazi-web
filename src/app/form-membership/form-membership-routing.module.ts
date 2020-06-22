import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMembershipComponent } from './form-membership.component';
import { FormMembershipThankYouComponent } from './form-membership-thank-you/form-membership-thank-you.component';

const routes: Routes = [
  {
    path: 'formulario-membresia',
    component: FormMembershipComponent
  },
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
