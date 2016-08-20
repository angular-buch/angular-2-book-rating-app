import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { BookDetailsComponent } from './book-details.component';
import { BOOK_DETAILS_ROUTING } from './book-details.routing';

@NgModule({
  imports: [ CommonModule, BOOK_DETAILS_ROUTING ],
  declarations: [ BookDetailsComponent ]
})
export default class BookDetailsModule { }
