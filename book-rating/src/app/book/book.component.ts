import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-book',
  templateUrl: 'book.component.html'
})
export class BookComponent {
  @Input() information: Book;
  @Output() rated: EventEmitter<Book>;

  constructor() { 
    this.rated = new EventEmitter<Book>();
  }

  rateUp() {
    this.information.rateUp();
    this.rated.emit(this.information);
    
  }

  rateDown() {
    this.information.rateDown();
    this.rated.emit(this.information);
  }
}
