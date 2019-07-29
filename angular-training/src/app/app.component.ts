import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  KNIGHT = './assets/knight.png';
  KNIGHT_ROTATE = './assets/knight-rotate.png';

  player1: string = 'Jordi Serra';
  player2: string = 'Ferran Bernal';

  start: boolean = true;
}