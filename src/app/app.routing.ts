import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageGvComponent } from './landing-page-gv/landing-page-gv.component';
import { LandingPageGtComponent } from './landing-page-gt/landing-page-gt.component';
import { LandingPageGeComponent } from './landing-page-ge/landing-page-ge.component';

import { FormOfflineComponent } from './form-offline/form-offline.component';

export const router : Routes = [
    { path: '', redirectTo:'landing-page', pathMatch:'full'},
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'landing-page-gv', component: LandingPageGvComponent },
    { path: 'landing-page-gt', component: LandingPageGtComponent },
    { path: 'landing-page-ge', component: LandingPageGeComponent },
    { path: 'form-offline', component: FormOfflineComponent }
]

export const routes : ModuleWithProviders = RouterModule.forRoot(router, { useHash : false });