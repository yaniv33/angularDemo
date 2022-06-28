import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {CountdownEvent} from "ngx-countdown";

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})

// https://www.npmjs.com/package/ngx-countdown
// npm i ngx-countdown
// import CountdownModule

//
export class CountDownComponent implements OnInit {

  @Input()
  public timeLeft: any;

  constructor() {
    console.log('count down - constructor');
  }

  ngOnInit() {
    // this.setTimeLeft(this.timeLeft);
  }

  setTimeLeft(timeLeftForBooking: any) {
    if (timeLeftForBooking) {
      this.timeLeft = timeLeftForBooking;
    }
  }

  setOnTimerFinishedEvent($event:  	CountdownEvent) {
    console.log('count down - timer finished');
    // this.timerFinishedCallableFunction = onTimerFinished;
  }

  public timerFinishedCallableFunction = function ($event : UIEvent) {
    console.log('count down - timer finished');
  };

  getCountdownObject() {
    const self = this;
    if (self.timeLeft) {
      return {
        leftTime: self.timeLeft,
        format: 'mm:ss'
      };
    } else {
      return {
        leftTime: 0,
        format: 'mm:ss'
      };
    }
  }

}
