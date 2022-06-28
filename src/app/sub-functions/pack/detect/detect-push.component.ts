import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detect-push',
  template: 'Items push:{{data.counter}}',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectPushComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
