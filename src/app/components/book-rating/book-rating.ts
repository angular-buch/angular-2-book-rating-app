import { Component, View} from 'angular2/angular2';
import BookComponent from '../book-component/book-component';
import Book from '../../models/book';

@Component({
  selector: 'book-rating'
})
@View({
  template: `
    <h1>Bücher</h1>
    <span>{{ books }}</span>

    <book [buch]="book"></book>
  `,
  directives: [BookComponent]
})
export default class BookRating {
  book: Book;
  books: Array<string>;

  constructor() {
    this.book = new Book('Angular 1.x', 'Es war schön');
    this.books = ['Hi DDC', 'Danke für das gute essen.'];
  }
}
