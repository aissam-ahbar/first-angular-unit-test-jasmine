import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Function containing some logic to unit test !!!
  public displayHello(name: string) {
    const myName = name || '';
    return 'Hello ' + myName;
  }
}
