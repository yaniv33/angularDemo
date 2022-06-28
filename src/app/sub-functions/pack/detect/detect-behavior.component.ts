import {ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detect-behavior',
  template: 'Items push:{{Mdata.counter}}',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectBehaviorComponent implements OnInit {

  @Input() data!: Observable<any>;
  Mdata;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.data.subscribe((value) => {
      this.Mdata = value;
      this.cd.markForCheck(); // this line tells angular to reload the current html due to changes made...
    });
  }

}

