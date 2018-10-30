import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exponential',
  templateUrl: './exponential.component.html',
  styleUrls: ['./exponential.component.css']
})
export class ExponentialComponent implements OnInit {

  v_stretch = 0;
  v_translation = 0;
  h_stretch = 0;
  h_translation = 0;

  constructor() { }

  ngOnInit() {
  }

}
