import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const DASHBOARD_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent}
];

export const DASHBOARD_ROUTING = RouterModule.forChild(DASHBOARD_ROUTES);