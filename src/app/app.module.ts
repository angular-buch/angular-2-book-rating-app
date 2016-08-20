import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';

import { DashboardModule } from './dashboard/dashboard.module';
import { BookDetailsModule } from './book-details/book-details.module';

import { BookStoreService } from './services/book-store.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,

    DashboardModule,
    BookDetailsModule,
    APP_ROUTING
  ],
  providers: [ BookStoreService ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
