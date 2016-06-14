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
import { element} from '../../../test/test.helper';

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
    let fixture: ComponentFixture<DashboardComponent>;
    let dashboard: DashboardComponent;
    let control;

    beforeEach(() => {
      return builder
        .createAsync(DashboardComponentTestController)
        .then((_fixture_: ComponentFixture<DashboardComponent>) => {
          fixture = _fixture_;
          control = element(fixture);

          dashboard = fixture
                        .debugElement
                        .query(By.directive(DashboardComponent))
                        .componentInstance;

          dashboard.ngOnInit();
        });
    });

    it('creates a new of the book', () => {
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

