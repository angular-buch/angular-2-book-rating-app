import {Component} from 'angular2/core';
import {Book} from '../../models/book';
import {BookComponent} from '../book-component/book-component';

@Component({
  selector: 'dashboard',
  directives: [BookComponent],
  template: `
    <h1>Buch</h1>
    <book [book]="book"></book>`
})
export class Dashboard {
  book: Book;

  constructor() {
    this.book = new Book('Angular 2', 'Eine praktische Einführung');
  }
}
