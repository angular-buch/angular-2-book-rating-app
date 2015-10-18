// book-component.ts
import { Component, View, EventEmitter } from 'angular2/angular2';
import Book from '../models/book';

@Component({
  selector: 'book',
  inputs: ['book'],
  outputs: ['rated']
})
@View({
  template: `
    <div class="well">
      <div class="thumbnail pull-right">
        <img src="//gravatar.com/avatar/{{ book.rating }}?s=80&default=wavatar"/>
      </div>
      <h2>{{ book.title }} <small>Stars {{ book.rating }}</small></h2>
      <p>{{ book.comment }}</p>

      <button (click)="rateUp()" class="btn btn-default glyphicon glyphicon-thumbs-up"></button>
      <button (click)="rateDown()" class="btn btn-default glyphicon glyphicon-thumbs-down"></button>
    </div>
  `
})
export default class BookComponent {
  book: Book;
  rated: EventEmitter = new EventEmitter();;

  rateUp() {
    this.book.rating++;
    this.rated.next(this.book);
  }

  rateDown() {
    this.book.rating--;
    this.rated.next(this.book);
  }
}
