import { Injectable } from '@angular/core';

import { Book } from '../shared';

@Injectable()
export class BookStoreService {
  books: Book[];

  constructor() {
    this.books = [
      new Book('Angular 2', 'Einstieg in die komponentenbasierte Entwicklung'),
      new Book('Bericht DWX 2016', 'Das haben wir erlebt')
    ];
  }

  getBook(id: String): Book {
      return this.books.find((book) => book.id === id);
  }

  getAll(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

}
