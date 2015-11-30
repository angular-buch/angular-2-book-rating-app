import { Component, View, EventEmitter } from 'angular2/angular2';
import { Input, Output} from 'angular2/angular2';
import Book from '../../models/book';

@Component({
  selector: 'book'
})
@View({
  templateUrl: './app/components/book-component/book-component.html'
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
