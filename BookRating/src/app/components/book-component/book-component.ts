import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Book} from '../../models/book';

@Component({
  selector: 'book',
  template: `
    <div class="well">
      <div class="thumbnail pull-right">
        <img src="//gravatar.com/avatar/{{ book.rating }}?s=80&default=wavatar"/>
      </div>
      <h2>{{ book.title }} <small>Stars {{ book.rating }}</small></h2>
      <p>{{ book.comment }}</p>

      <button (click)="rateUp()" class="btn btn-default glyphicon glyphicon-thumbs-up"></button>
      <button (click)="rateDown()" class="btn btn-default glyphicon glyphicon-thumbs-down"></button>
    </div>`
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
