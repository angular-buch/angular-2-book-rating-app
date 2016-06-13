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

  describe('Creating a new book', () => {
    let dashboard: DashboardComponent;

    beforeEach(inject([DashboardComponent], (_dashboard_: DashboardComponent) => {
      dashboard = _dashboard_;
      dashboard.ngOnInit();
    }));

    it('adds a book to the list', () => {
      let expected = dashboard.books.length + 1;

      dashboard.add({value: 'title'}, {value: 'description'});

      expect(dashboard.books.length).toEqual(expected)
    });
  });

  describe('Filling the form and clicking on "Submit"', () => {
    it('creates a new of the book', () => {
      return builder
        .createAsync(DashboardComponentTestController)
        .then((fixture: ComponentFixture<DashboardComponent>) => {
          let query = fixture.debugElement.query(By.directive(DashboardComponent));
          let dashboard: DashboardComponent = query.componentInstance;
          dashboard.ngOnInit();

          let title: Element = fixture.nativeElement.querySelector('input.form-control[name="title"]');
          title.setAttribute('value', 'Angular 2');

          let description: Element = fixture.nativeElement.querySelector('textarea.form-control[name="comment"]');
          description.innerHTML = 'Workshop';

          let submit: Element = fixture.nativeElement.querySelector('button.btn.btn-danger');
          submit.dispatchEvent(new Event('click'));

          expect(dashboard.books.length).toEqual(3);
        });
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

