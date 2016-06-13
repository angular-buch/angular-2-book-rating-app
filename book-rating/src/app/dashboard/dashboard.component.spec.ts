import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';

describe('Component: Dashboard', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DashboardComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('injects the component', inject([DashboardComponent],
      (component: DashboardComponent) => {
    expect(component).toBeTruthy();
  }));

  it('creates the component', inject([], () => {
    return builder.createAsync(DashboardComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DashboardComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  describe('Creating a new book', () => {
    it('adds a book to the list', () => {
      return builder.createAsync(DashboardComponentTestController)
        .then((fixture: ComponentFixture<any>) => {
          let query = fixture.debugElement.query(By.directive(DashboardComponent));
          let dashboard = <DashboardComponent> query.componentInstance;
          
          dashboard.ngOnInit();
          
          let booksCount = dashboard.books.length;
          let expected = booksCount + 1;

          dashboard.add({value: 'title'}, {value: 'description'});

          expect(dashboard.books.length).toEqual(expected)
        });
    });
  })
});

@Component({
  selector: 'test',
  template: `
    <br-dashboard></br-dashboard>
  `,
  directives: [DashboardComponent]
})
class DashboardComponentTestController { }

