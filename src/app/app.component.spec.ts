import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App#displayHello Test Suite', () => {
  // ARRANGE STEP : Setup dependencies & create your component (TestBed).
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it(`given valid name, should return Hello with name'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // ASSERT STEP: Check your code matches your expectations
    const expected = 'Hello Aissam';
    const name = 'Aissam';
    const res = app.displayHello(name);
    expect(res).toEqual(expected);
  });

  it(`given empty name, should return just Hello'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const expected = 'Hello';
    const name = '';
    const res = app.displayHello(name).trim();
    expect(res).toEqual(expected);
  });
});
