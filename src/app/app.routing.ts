import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

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
        loadChildren: './landing-page-gv/landing-page-gv.module#LandingPageGvModule'
    },
    {
        path: 'jovens/talentos-globais',
        loadChildren: './landing-page-gt/landing-page-gt.module#LandingPageGtModule'
    },
    {
        path: 'jovens/empreendedor-global',
        loadChildren: './landing-page-ge/landing-page-ge.module#LandingPageGeModule'
    },
    { path: '**', component: LandingPageComponent }
]

export const routes : ModuleWithProviders = RouterModule.forRoot(router, { useHash : false });
