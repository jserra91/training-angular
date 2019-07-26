import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value1: string = 'Jordi Serra Gonzalez';

  handleInput(event: any) {
    this.value1 = event.target.value;
  }
}