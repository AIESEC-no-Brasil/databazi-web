import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageGvComponent } from './landing-page-gv/landing-page-gv.component';
import { LandingPageGtComponent } from './landing-page-gt/landing-page-gt.component';
import { LandingPageGeComponent } from './landing-page-ge/landing-page-ge.component';

import { FormOfflineComponent } from './form-offline/form-offline.component';

export const router : Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'voluntario-global', component: LandingPageGvComponent },
    { path: 'talento-global', component: LandingPageGtComponent },
    { path: 'empreendedor-global', component: LandingPageGeComponent },
    { path: 'form-offline', component: FormOfflineComponent }
]

export const routes : ModuleWithProviders = RouterModule.forRoot(router, { useHash : false });