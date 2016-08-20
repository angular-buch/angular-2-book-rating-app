import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '**', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'book/:isbn', loadChildren: 'app/book-details/book-details.module' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
