import { ComponentFixture } from '@angular/compiler/testing';

export function element(fixture:ComponentFixture<any>) {
  function select(selector: string): Element {
    return fixture.nativeElement.querySelector(selector);
  }
}