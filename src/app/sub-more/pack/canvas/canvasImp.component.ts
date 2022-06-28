import {Component, Input, ViewChild, OnInit, HostListener, AfterViewInit} from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <br/><br/><br/><br/>
  <canvas #sigPad width="300" height="150"
          (mousedown)="onMouseDown($event)"
          (mousemove)="onMouseMove($event)"></canvas>
  <br/>
  <button (click)="clear()">clear</button>
  <button (click)="save()">save</button>
  <br/>
  <img [hidden]="img === null" [src]="img">
  <br/>
  <span>{{img}}</span>`,
  styles: [`
  canvas {
    border: 1px solid #000;
  }
  span {
    width: 300px;
  }
  `]
})

export class CanvasImpComponent implements AfterViewInit  {
  @Input() name!: string;
  @ViewChild('sigPad', {static:false})  sigPad;
  sigPadElement;
  context;
  isDrawing = false;
  img;

  ngAfterViewInit() {
    this.sigPadElement = this.sigPad.nativeElement;
    this.context = this.sigPadElement.getContext('2d');
    this.context.strokeStyle = '#3742fa';
  }

  @HostListener('document:mouseup', ['$event'])

  onMouseUp(e) {
    this.isDrawing = false;
  }

  onMouseDown(e) {
    this.isDrawing = true;
    const coords = this.relativeCoords(e);
    this.context.moveTo(coords.x, coords.y);
  }

  onMouseMove(e) {
    if (this.isDrawing) {
      const coords = this.relativeCoords(e);
      this.context.lineTo(coords.x, coords.y);
      this.context.stroke();
    }
  }

  private relativeCoords(event) {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    return { x: x, y: y };
  }

  clear() {
    this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
    this.context.beginPath();
  }

  save() {
    this.img = this.sigPadElement.toDataURL("image/png");
    console.log(this.img);
  }

}

