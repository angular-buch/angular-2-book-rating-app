import { RouterModule, Routes } from '@angular/router';

import { BookDetailsComponent } from './book-details.component';

const BOOK_DETAILS_ROUTES = [{
  path: 'book/:isbn', component: BookDetailsComponent
}];

export const BOOK_DETAILS_ROUTING = RouterModule.forChild(BOOK_DETAILS_ROUTES);
