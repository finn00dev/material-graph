import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  PARABOLA_OPEN = false;
  EXPO_OPEN = false;

  openParabola(){
    this.PARABOLA_OPEN = true;
  }

  openExponential(){
    this.EXPO_OPEN = true;
  }

}
