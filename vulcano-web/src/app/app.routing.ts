import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './login/guards/login.guard';
import { Route } from '@angular/router';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        ]
    },
    {
        path: '',
        canActivate: [LoginGuard],
        component: LayoutComponent,
        children: [
            { path: 'calendario', loadChildren: () => import('./calendario/calendario.module').then(m => m.CalendarioModule) },
            { path: 'cuento', loadChildren: () => import('./cuento/cuento.module').then(m => m.CuentoModule) },
            { path: 'reporte', loadChildren: () => import('./reporte/reporte.module').then(m => m.ReporteModule) },
        ]
    }
];