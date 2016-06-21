import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor() {}

  rateUp() {
    this.book.rateUp();
  }

  ngOnInit() {
  }

}
