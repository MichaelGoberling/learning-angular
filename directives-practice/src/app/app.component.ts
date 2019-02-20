import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.white-text {
    color: white;
  }
  `]
})
export class AppComponent {
  title = 'directives-practice';
  displayDetails = false;
  buttonClicks = [];
  clickNumber = 0;

  constructor() {

  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.clickNumber += 1;
    this.buttonClicks.push(this.clickNumber);
  }
}
