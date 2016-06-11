import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../book';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  directives: [BookComponent]
})
export class DashboardComponent implements OnInit {

  book: Book;

  constructor(){}

  ngOnInit() {
    this.book = new Book('Bericht DWX 2016', 'Das haben wir erlebt');
  }

}
