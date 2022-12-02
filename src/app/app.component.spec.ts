import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
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
    const res = app.displayHello(expected);
    expect(res).toEqual(expected);
  });
});
