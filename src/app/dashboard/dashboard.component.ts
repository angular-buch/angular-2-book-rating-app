import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BookComponent } from '../book';
import { CreateBookComponent } from '../create-book';
import { Book } from '../shared';
import { BookStoreService } from '../services/book-store.service';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent, CreateBookComponent]
})
export class DashboardComponent implements OnInit {
  books: Book[];
  updated: Book;

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.bs
      .getAll().subscribe(books => this.books = books );
  }

  add(book: Book) {
    this.bs
      .create(book)
      .subscribe(params => this.books.push(book));
  }

  delete(book: Book) {
    this.bs
      .delete(book.isbn)     
      .subscribe(params => {
        this.books = this.books.filter((c) => c != book)
      });
  }

  sort(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
    this.updated = book;
  }
}
