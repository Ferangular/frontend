import { Routes } from '@angular/router';
import {isAuthenticatedGuard, isNotAuthenticatedGuard} from "./core/guards";

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth',     canActivate: [ isNotAuthenticatedGuard ],  loadChildren: () => import('./pages/auth/auth.index').then(m => m.AUTH_ROUTES)  },
  { path: 'dashboard',     canActivate: [ isAuthenticatedGuard ],  loadChildren: () => import('./pages/dashboard/dashboard.index').then(m => m.DASHBOARD_ROUTE)  },
  { path: '**', redirectTo: 'auth' }
];
