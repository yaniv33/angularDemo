import {ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detect-tune',
  template: 'Items push:{{Mdata.counter}}',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectTuneComponent implements OnInit {

  @Input() data!: Observable<any>;
  @Input() notifier!: Observable<boolean>;
  Mdata;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.data.subscribe((value) => {
      this.Mdata = value;
      console.log('got :' + value);
      this.cd.markForCheck();
    });

    // this.cd.detach();

    this.notifier.subscribe((value => {
      if (value) {
        this.cd.reattach();
      } else {
        this.cd.detach();
      }
    }));
  }
}
