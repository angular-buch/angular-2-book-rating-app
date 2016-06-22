import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { Book } from '../shared';
import { BookStoreService } from '../services/book-store.service';




@Component({
  moduleId: module.id,
  selector: 'br-book-details',
  templateUrl: 'book-details.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let isbn = params['isbn'];
      this.book = this.bs.getBook(isbn);
    });
  }

}
