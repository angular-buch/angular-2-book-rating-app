import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DASHBOARD_ROUTING } from './dashboard.routing';

import { CreateBookComponent } from '../create-book';

@NgModule({
  imports: [ CommonModule, FormsModule, DASHBOARD_ROUTING ],
  declarations: [ DashboardComponent, CreateBookComponent ]
})
export class DashboardModule { }
