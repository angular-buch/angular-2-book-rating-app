import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-create-book',
  templateUrl: 'create-book.component.html',
  styleUrls: ['create-book.component.css']
})
export class CreateBookComponent{
  @Output() bookCreated: EventEmitter<Book>

  constructor() {
    this.bookCreated = new EventEmitter<Book>();
  }

  submit(title, comment) {
    this.bookCreated.emit(new Book(title.value, comment.value));
    title.value = comment.value = '';
  }
}
