import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';

export const router : Routes = [
    { path: '', redirectTo:'landing-page', pathMatch:'full'},
    { path: 'landing-page', component: LandingPageComponent }
]

export const routes : ModuleWithProviders = RouterModule.forRoot(router, { useHash : false });