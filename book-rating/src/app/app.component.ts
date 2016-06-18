import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DashboardComponent } from './dashboard';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
