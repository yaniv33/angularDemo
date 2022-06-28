import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detect-inner',
  template: 'Items input:{{data.counter}}',
})
export class DetectInnerComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
