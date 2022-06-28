import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import {SnackBarService} from "./snack-bar.service";
import {InnerSnackBarComponent} from "./inner-snack-bar/inner-snack-bar.component";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
  TextOnlySnackBar
} from "@angular/material/snack-bar";

// need to import module MatSnackBarModule
// https://material.angular.io/components/snack-bar/overview

// https://stackblitz.com/edit/angular-material-snackbar-example?file=src%2Fapp%2Fbasic-snackbar%2Fbasic-snackbar.component.ts

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SnackBarComponent {

  remark : string;

  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  addExtraClass: boolean = false;

  constructor(public snackBar: MatSnackBar,
              public userInactivityService: SnackBarService) {
  }

  open() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.autoHide;
    config.panelClass = this.addExtraClass ? ['added-css'] : undefined;
    this.snackBar.open(this.message, this.actionButtonLabel ? this.actionButtonLabel : undefined, config)
      .onAction().subscribe(data => {
        console.log(data);
      }
    );
  }

// OPEN TIMER
  snackBarWarnIdle: MatSnackBarRef<TextOnlySnackBar> | undefined;
  openTimer() {
    this.remark = 'In one minute time , a popup would appear ... ';
    this.userInactivityService.minuteAlert.subscribe(() => {

      this.snackBarWarnIdle = this.snackBar.open('שים לב! בעוד כשניה המערכת תחזור למסך הראשי. לחץ כאן לביטול.' );
    });

    this.userInactivityService.finalAlert.subscribe(() => {
      location.reload();
    });

  }
  @HostListener('window:mousemove') refreshUserState() {
    this.userInactivityService.refreshUserState();
    if (this.snackBarWarnIdle)
      this.snackBarWarnIdle.dismiss();
  }

// INNER COMPONENT
  showBasicComponent() {
    this.snackBar.openFromComponent(InnerSnackBarComponent, {
                                      data: "This is an example for passing data",
                                      duration: 10000
                                    });
  }

}
