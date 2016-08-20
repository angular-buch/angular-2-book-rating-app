import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';

import { DashboardModule } from './dashboard/dashboard.module';

import { BookStoreService } from './services/book-store.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,

    DashboardModule,
    APP_ROUTING
  ],
  providers: [ BookStoreService ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
