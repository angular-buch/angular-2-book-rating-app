import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { BookStoreService } from './services/book-store.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [BookStoreService]
})
export class AppComponent { }
