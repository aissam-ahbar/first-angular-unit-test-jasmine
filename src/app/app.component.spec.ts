import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Test Suite
describe('[App.displayHello(name)]', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // ARRANGE STEP : Setup dependencies & create your component (TestBed).
  beforeEach(async () => {
    // Load dependencies
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    // Create the component fixture that allows to inspect the component
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  // Unit Test 1
  it(`given valid name not empty, should return Hello with name'`, () => {
    // ASSERT STEP: Check your code matches your expectations
    const expected = 'Hello Aissam';
    const name = 'Aissam';
    const res = component.displayHello(name);
    expect(res).toEqual(expected);
  });

  // Unit Test 2
  it(`given empty name, should return just 'Hello''`, () => {
    const expected = 'Hello';
    const name = '';
    const res = component.displayHello(name).trim();
    expect(res).toEqual(expected);
  });
});
