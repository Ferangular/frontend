import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth',   loadChildren: () => import('./pages/auth/auth.index').then(m => m.AUTH_ROUTES)  },
  { path: 'dashboard',   loadChildren: () => import('./pages/dashboard/dashboard.index').then(m => m.DASHBOARD_ROUTE)  },
  { path: '**', redirectTo: 'auth' }
];
