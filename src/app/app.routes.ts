import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found';
import { BookDetailsComponent } from './book-details';

const APP_ROUTES: Routes = [
  { path: '**',         component: NotFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
