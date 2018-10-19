import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageGvComponent } from './landing-page-gv/landing-page-gv.component';
import { LandingPageGtComponent } from './landing-page-gt/landing-page-gt.component';
import { LandingPageGeComponent } from './landing-page-ge/landing-page-ge.component';
import { FormOfflineComponent } from './form-offline/form-offline.component';
import { FormGvThankYouComponent } from './form-gv/form-gv-thank-you/form-gv-thank-you.component'
import { FormGeThankYouComponent } from './form-ge/form-ge-thank-you/form-ge-thank-you.component';
import { FormGtThankYouComponent } from './form-gt/form-gt-thank-you/form-gt-thank-you.component'

export const router : Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'voluntario-global', component: LandingPageGvComponent },
    { path: 'talento-global', component: LandingPageGtComponent },
    { path: 'empreendedor-global', component: LandingPageGeComponent },
    { path: 'intercambio', component: FormOfflineComponent },
    { path: 'voluntario-global/obrigado', component: FormGvThankYouComponent },
    { path: 'talento-global/obrigado', component: FormGtThankYouComponent },
    { path: 'empreendedor-global/obrigado', component: FormGeThankYouComponent }
]

export const routes : ModuleWithProviders = RouterModule.forRoot(router, { useHash : false });
