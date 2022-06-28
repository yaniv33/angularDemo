import { Component } from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-count-down-view',
  templateUrl: './count-down-view.component.html',
  styleUrls: ['./count-down-view.component.css']
})
export class CountDownViewComponent  {

  constructor() { }

// OPEN COUNTDOWN
  timeLeftForBookingVal!: number
  subscription!: Subscription;
  openCountdown() {

    this.timeLeftForBookingVal = 50;

    if (this.timeLeftForBookingVal > 0) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      this.subscription = interval(1000).subscribe(value => {
        this.timeLeftForBookingVal--;
        if (this.timeLeftForBookingVal <= 0) {
          this.subscription.unsubscribe();
        }
      })
    }
  }
}
