import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from '../shared';

@Injectable()
export class BookStoreService {

  private headers: Headers = new Headers();
  private api: string = 'http://book-monkey2-api.angular2buch.de';
  books: Book[];

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
   }

  getBook(isbn: string): Observable<Book> {
      return this.http
        .get(`${this.api}/book/${isbn}`)   // kein PLURAL S
        .map(response => response.json())
        .map(rawBook => new Book(rawBook.title, rawBook.description, rawBook.number, rawBook.isbn))
  }

  getAll(): Observable<Book[]> {
      return this.http
        .get(`${this.api}/books`)   // PLURAL S
        .map(response => response.json())
        .map(rawBooks => rawBooks.map(rawBook => new Book(rawBook.title, rawBook.description, rawBook.number, rawBook.isbn)))
  }

  create(book: Book): Observable<any>  {
    return this.http
      .post(`${this.api}/book`, JSON.stringify(book), { headers: this.headers })
  }

  update(book: Book): Observable<any>  {
    return this.http
      .put(`${this.api}/book/${book.isbn}`, JSON.stringify(book), { headers: this.headers })
  }

  delete(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/book/${isbn}`);
  }
}