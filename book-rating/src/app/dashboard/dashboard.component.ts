import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: string[];

  constructor(){}

  ngOnInit() {
    this.books = ['Angular 2', 'Aurelia'];
  }

}
