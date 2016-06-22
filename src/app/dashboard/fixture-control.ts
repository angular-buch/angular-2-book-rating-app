import { ComponentFixture } from '@angular/compiler/testing';

export class FixtureControl {
  constructor(private fixture: ComponentFixture<any>) { }

  select(selector: string): Element {
    return this.fixture.nativeElement.querySelector(selector);
  }
}