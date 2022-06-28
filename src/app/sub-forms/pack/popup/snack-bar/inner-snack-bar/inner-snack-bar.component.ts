import { Component, OnInit, Inject } from "@angular/core";
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from "@angular/material/snack-bar";
import {interval, Subscription} from "rxjs";


//  USING INNER COMPONENT - NEED TO SET IN MODULE  entryComponents: [InnerSnackBarComponent],
@Component({
  selector: 'app-inner-snack-bar',
  templateUrl: './inner-snack-bar.component.html',
  styleUrls: ['./inner-snack-bar.component.css']
})
export class InnerSnackBarComponent implements OnInit {

  constructor(
    public sbRef: MatSnackBarRef<InnerSnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
  ngOnInit() {
    this.openCountdown();
  }

  timeLeftForBookingVal!: number
  subscription!: Subscription;
  openCountdown() {

    this.timeLeftForBookingVal = 50;

    if (this.timeLeftForBookingVal > 0) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      this.subscription = interval(1000).subscribe(value => {

        console.log(this.timeLeftForBookingVal);
        this.timeLeftForBookingVal--;
        if (this.timeLeftForBookingVal <= 0) {
          this.subscription.unsubscribe();
        }
      })
    }
  }

}
