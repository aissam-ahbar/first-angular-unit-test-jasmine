import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Test Suite
describe('[App.displayHello(name)]', () => {
  // ARRANGE STEP : Setup dependencies & create your component (TestBed).
  beforeEach(async () => {
    // Load dependencies
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    // Create the component fixture that allows to inspect the component
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
  });

  // Unit Test 1
  it(`given valid name not empty, should return Hello with name'`, () => {
    // ASSERT STEP: Check your code matches your expectations
    const expected = 'Hello Aissam';
    const name = 'Aissam';
    const res = app.displayHello(name);
    expect(res).toEqual(expected);
  });

  // Unit Test 2
  it(`given empty name, should return just 'Hello''`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const expected = 'Hello';
    const name = '';
    const res = app.displayHello(name).trim();
    expect(res).toEqual(expected);
  });
});
