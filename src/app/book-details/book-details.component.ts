import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Book } from '../shared';
import { BookStoreService } from '../services/book-store.service';

@Component({
  moduleId: module.id,
  selector: 'br-book-details',
  templateUrl: 'book-details.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class BookDetailsComponent implements OnInit {
  detailsForm: FormGroup;
  book: Book;

  constructor(private route: ActivatedRoute,
              private form: FormBuilder, 
              private bookStore: BookStoreService) { }

  ngOnInit() {
    this.book = Book.empty();
    
    this.getBook();
    this.setupForm();
  }

  getBook() {
    this.route.params.subscribe(params => {
      let isbn = params['isbn'];
      this.bookStore.getSingle(isbn).subscribe(book => {
        this.book = book;
      });
    });
  }

  setupForm() {
    this.detailsForm = this.form.group({
      'title': '',
      'description': ''
    });
  }

  onSubmit(value: string): void {  
    console.log('you submitted value: ', value);  
  }
}
