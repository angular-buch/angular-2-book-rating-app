import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [DashboardComponent]
})
export class AppComponent { }
