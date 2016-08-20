import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared';

@Component({
  selector: 'br-create-book',
  templateUrl: 'create-book.component.html',
  styleUrls: ['create-book.component.css']
})
export class CreateBookComponent{
  @Output() bookCreated: EventEmitter<Book>;

  book: Book;

  constructor() {
    this.bookCreated = new EventEmitter<Book>();
    this.book = Book.empty();
  }

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
  }
}
