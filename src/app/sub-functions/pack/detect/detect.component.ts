import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html'
})
export class DetectComponent implements OnInit {

  constructor() { }

  dataInput = {counter: 0};
  dataPush  = {counter: 0};
  dataBehavior$  = new BehaviorSubject({ counter: 0});
  Counter = 0;

  dataTune$  = new BehaviorSubject({ counter: 0});
  CounterTune = 0;
  Interval;
  cdTuneEnable = true;
  notifier$ = new BehaviorSubject(this.cdTuneEnable);


  ngOnInit() {
  }

  incrementInput() {
    this.dataInput = {counter: ++this.dataInput.counter};
  }

  incrementPush() {
    this.dataPush = {counter: ++this.dataPush.counter};
  }

  incrementBehavior() {
    this.dataBehavior$.next({counter: ++this.Counter});
  }

  start() {
    if (!this.Interval) {
      this.Interval = setInterval(() => {
        this.dataTune$.next({counter: ++this.CounterTune});
      }, 100);
    }
  }

  stop() {
    clearInterval(this.Interval);
    this.Interval = null;
  }

  toggleCD() {
    // this.cdTuneEnable = !this.cdTuneEnable;
    this.notifier$.next(this.cdTuneEnable = !this.cdTuneEnable);
  }
}
