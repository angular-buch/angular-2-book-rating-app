import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  xit
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import {Http, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import { DashboardComponent } from './dashboard.component';
import { BookStoreService } from '../services/book-store.service'
import { Book } from '../shared'
import { FixtureControl } from './fixture-control';

describe('Component: Dashboard', () => {
  let builder: TestComponentBuilder;


  beforeEachProviders(() => [
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
      deps: [MockBackend, BaseRequestOptions]
    }),
    BookStoreService,
    DashboardComponent]
  );

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  beforeEach(inject([MockBackend], function (mockBackend: MockBackend) {
    
    // fake response
    let hardcodedBooks = [new Book('Test', 'Test')];
    let response = new Response(new ResponseOptions({body: hardcodedBooks}));
    // return the response if we have a connection to the MockBackend
    mockBackend.connections.subscribe(connection => connection.mockRespond(response));

  }))

  describe('Creating a new book', () => {
    let dashboard: DashboardComponent;

    beforeEach(inject([DashboardComponent], (_dashboard_: DashboardComponent) => {
      dashboard = _dashboard_;
      dashboard.ngOnInit();
    }));

    xit('adds a book to the list', () => {
      let expected = dashboard.books.length + 1;

      dashboard.add(new Book('title','description'));

      expect(dashboard.books.length).toEqual(expected)
    });
  });

  describe('Filling the form and clicking on "Submit"', () => {
    let fixture: ComponentFixture<DashboardComponent>;
    let dashboard: DashboardComponent;
    let control;

    beforeEach(() => {
      return builder
        .createAsync(DashboardComponentTestController)
        .then((_fixture_: ComponentFixture<DashboardComponent>) => {
          fixture = _fixture_;
          
          control = new FixtureControl(fixture);
          
          dashboard = fixture
                        .debugElement
                        .query(By.directive(DashboardComponent))
                        .componentInstance;

          dashboard.ngOnInit();
        });
    });

    xit('creates a new of the book', () => {
      control.select('input.form-control[name="title"]')
             .setAttribute('value', 'Angular 2');

      control.select('textarea.form-control[name="comment"]')
             .innerHTML = 'Workshop';

      control.select('button.btn.btn-danger')
             .dispatchEvent(new Event('click'));

      expect(dashboard.books.length).toEqual(3);
    });
  });
});

@Component({
  selector: 'test',
  template: `
    <br-dashboard></br-dashboard>
  `,
  directives: [DashboardComponent]
})
class DashboardComponentTestController { }

