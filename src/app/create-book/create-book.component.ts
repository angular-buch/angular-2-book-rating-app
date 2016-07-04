import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-create-book',
  templateUrl: 'create-book.component.html',
  styleUrls: ['create-book.component.css']
})
export class CreateBookComponent{
  @Output() bookCreated: EventEmitter<Book>;

  book: Book;

  constructor() {
    this.bookCreated = new EventEmitter<Book>();
    this.book = new Book('', '');
  }

  add() {
    this.bookCreated.emit(this.book);
    this.book = new Book('', '');
  }
}
