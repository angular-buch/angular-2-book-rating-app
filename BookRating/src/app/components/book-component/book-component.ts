import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Book} from '../../models/book';

@Component({
  moduleId: module.id,
  selector: 'book',
  templateUrl: 'book-component.html'
})
export class BookComponent {
  @Input() book: Book;
  @Output() rated: EventEmitter<Book> = new EventEmitter<Book>();

  rateUp() {
    this.book.rating++;
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rating--;
    this.rated.emit(this.book);
  }
}
