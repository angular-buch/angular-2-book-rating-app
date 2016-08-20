import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BookDetailsComponent } from './book-details.component';
import { BOOK_DETAILS_ROUTING } from './book-details.routing';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, BOOK_DETAILS_ROUTING ],
  declarations: [ BookDetailsComponent ]
})
export class BookDetailsModule { }
