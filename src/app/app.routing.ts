import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormHostThankYouComponent } from './form-host/form-host-thank-you/form-host-thank-you.component';
import { LandingPageMembershipComponent } from './landing-page-membership/landing-page-membership.component';

export const router : Routes = [
    { path: '', component: LandingPageComponent },
    {
        path: 'voluntario-global',
        loadChildren: './landing-page-gv/landing-page-gv.module#LandingPageGvModule'
    },
    {
        path: 'talento-global',
        loadChildren: './landing-page-gt/landing-page-gt.module#LandingPageGtModule'
    },
    {
        path: 'empreendedor-global',
        loadChildren: './landing-page-ge/landing-page-ge.module#LandingPageGeModule'
    },
    {
        path: 'intercambio',
        loadChildren: './form-offline/form-offline.module#FormOfflineModule'
    },
    {
        path: 'formulario-voluntario-global',
        loadChildren: './form-gv/form-gv.module#FormGvModule'
    },
    {
        path: 'formulario-talento-global',
        loadChildren: './form-gt/form-gt.module#FormGtModule'
    },
    {
        path: 'formulario-empreendedor-global',
        loadChildren: './form-ge/form-ge.module#FormGeModule'
    },
    {
        path: 'jovens/voluntario-global',
        redirectTo: '/voluntario-global'
    },
    {
        path: 'jovens/talentos-globais',
        redirectTo: '/talentos-globais'
    },
    {
        path: 'jovens/empreendedor-global',
        redirectTo: '/empreendedor-global'
    },
    {
        path: 'hospede-um-intercambista',
        redirectTo: '/lar-global'
    },
    {
        path: 'estudantes/voluntario-global',
        redirectTo: '/voluntario-global'
    },
    {
        path: 'estudantes/talentos-globais',
        redirectTo: '/talentos-globais'
    },
    {
        path: 'estudantes/empreendedor-global',
        redirectTo: '/empreendedor-global'
    },
    {
        path: 'lar-global/obrigado',
        component: FormHostThankYouComponent
    },
    {
        path: 'membresia',
        component: LandingPageMembershipComponent
    },
    { path: '**', redirectTo: '/' }
]

export const routes : ModuleWithProviders = RouterModule.forRoot(router, { useHash : false });
