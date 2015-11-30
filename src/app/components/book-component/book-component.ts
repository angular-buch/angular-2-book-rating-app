import { Component, View, EventEmitter } from 'angular2/angular2';
import { Input, Output} from 'angular2/angular2';
import Book from '../../models/book';

@Component({
  selector: 'book'
})
@View({
  template: `
    <div class="well">
      <div class="thumbnail pull-right">
        <img src="//gravatar.com/avatar/{{ buch.rating }}?s=80&default=wavatar"/>
      </div>
      <h2>{{ buch.title }} <small>Stars {{ buch.rating }}</small></h2>
      <p> {{ buch.comment }} </p>

      <button (click)="rateUp()" class="btn btn-default glyphicon glyphicon-thumbs-up"></button>
      <button (click)="rateDown()" class="btn btn-default glyphicon glyphicon-thumbs-down"></button>
    </div>
  `
})
export default class BookComponent {
  @Input() buch: Book;
  @Output() rated: EventEmitter<Book>;

  constructor() {
    this.rated = new EventEmitter();
  }

  rateUp() {
    this.buch.rating++;
    this.rated.next(this.buch);
  }

  rateDown() {
    this.buch.rating--;
    this.rated.next(this.buch);
  }
}
