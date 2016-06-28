/*
 * Angular 2 decorators and services
 */
import {Component} from "@angular/core";
import {Nuform} from "./app.interface";
/*
 * App Component
 * Top Level Component
 */
declare var fabric:any;
declare var NUFORM:Nuform;

@Component({
  selector: 'app',
  styleUrls: [
    './app.style.css'
  ],
  template: `
   <canvas id="canvas" (mouseover)="canvasEnter()" (mouseleave)="canvasLeave()" #myCanvas [width]="nuform.width" [height]="nuform.height"></canvas>
   <button (click)="saveClicked()">Save</button><button (click)="clearClicked()">Clear</button>
  `
})
export class App {
  //angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular2 NuForm';
  url = 'http://nuchange.ca/nuform';
  nuform:Nuform;
  bootstrap:boolean = true; // Needs bootstraping
  _fabric:any;

  constructor() {
    this.nuform = NUFORM;

  }

  canvasEnter() {
    this._fabric = new fabric.Canvas('canvas');
    if (this.bootstrap) {
      this._fabric.setBackgroundImage(this.nuform.image, this._fabric.renderAll.bind(this._fabric));
      this._fabric.loadFromJSON(this.nuform.numap_in, this._fabric.renderAll.bind(this._fabric));
      this.bootstrap = false;
    }
    this._fabric.isDrawingMode = true;
    console.log("Canvas Initialized");
  }

  canvasLeave() {
    /*    var _fabric:any = new fabric.Canvas('canvas');
    _fabric.isDrawingMode = false;
     this.nuform.numap_out = JSON.stringify(_fabric);
     NUFORM = this.nuform;
     console.log("outside");*/
  }

  saveClicked() {
    this.nuform.numap_out = JSON.stringify(this._fabric);
    NUFORM = this.nuform;
    this._fabric.isDrawingMode = false;
    console.log(NUFORM.numap_out);

  }

  clearClicked() {
    this._fabric.clear();
    this._fabric.isDrawingMode = true;
  }


}
