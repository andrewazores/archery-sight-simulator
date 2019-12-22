import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  targetDistance = 70;
  targetDiameter = 122;
  eyePinDistance = 100;
  apertureDiameter = 10;

}
