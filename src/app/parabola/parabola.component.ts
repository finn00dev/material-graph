import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parabola',
  templateUrl: './parabola.component.html',
  styleUrls: ['./parabola.component.css']
})
export class ParabolaComponent implements OnInit {

  v_stretch = 0;
  v_translation = 0;
  h_stretch = 0;
  h_translation = 0;

  constructor() { }

  ngOnInit() {
  }

}
