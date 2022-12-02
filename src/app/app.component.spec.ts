import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it(`given null or undefined name, should return just Hello'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const name: string;
    const actual = app.displayHello(name);
    expect(actual).toEqual('Hello Aissam');
  });

  it(`given valid name, should return Hello with name'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const actual = app.displayHello('Aissam');
    expect(actual).toEqual('Hello Aissam');
  });
});
