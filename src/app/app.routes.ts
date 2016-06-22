import { RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard/index';
import { BookDetailsComponent } from './book-details/index';

export const AppRoutes: RouterConfig = [
    { path: '', component: DashboardComponent },
    { path: 'book/:isbn', component: BookDetailsComponent }
];