/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CreateBookComponent } from './create-book.component';

describe('Component: CreateBook', () => {
  it('should create an instance', () => {
    let component = new CreateBookComponent();
    expect(component).toBeTruthy();
  });
});
