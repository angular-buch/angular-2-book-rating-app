import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Book } from '../shared';

@Component({
  selector: 'br-book',
  templateUrl: 'book.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class BookComponent {
  @Input() book: Book;
  @Output() rated: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() deleted: EventEmitter<Book> = new EventEmitter<Book>();

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);  
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  delete() {
     this.deleted.emit(this.book);
  }
}
