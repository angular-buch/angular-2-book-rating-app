import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from '../shared';

@Injectable()
export class BookStoreService {

  private api: string = 'http://book-monkey2-api.angular2buch.de/books/';
  books: Book[];

  constructor(private http: Http) {
    // this.headers.append('Content-Type', 'application/json');
  }

  getBook(isbn: String): Book {
      return this.books.find((book) => book.isbn === isbn);
  }

  getAll(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

}
