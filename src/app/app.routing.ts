import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageGvComponent } from './landing-page-gv/landing-page-gv.component';

export const router : Routes = [
    { path: '', redirectTo:'landing-page', pathMatch:'full'},
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'landing-page-gv', component: LandingPageGvComponent }
]

export const routes : ModuleWithProviders = RouterModule.forRoot(router, { useHash : false });