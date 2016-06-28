/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Nuform } from './app.interface';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
   <canvas id="canvas" width="{{nuform.width}}" height="{{nuform.height}}"></canvas>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular2 NuForm';
  url = 'http://nuchange.ca/nuform';
  nuform:Nuform;

  constructor() {
    this.nuform = NUFORM;
  }

}

var NUFORM:Nuform = {
  'image': 'default.jpg',
  'width': 640,
  'height': 480,
  'lesionmap': ''
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
