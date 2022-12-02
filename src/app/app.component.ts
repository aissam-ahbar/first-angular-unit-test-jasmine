import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public displayHello(name: string) {
    const myName = name || '';
    return 'Hello ' + myName;
  }
}
