import {EventEmitter, HostListener, Injectable, Output} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  userInactive: Subject<any> = new Subject<any>();
  userActivity;

  showedMinute = false;

  @Output() minuteAlert: EventEmitter<void> = new EventEmitter<void>();
  @Output() finalAlert: EventEmitter<void> = new EventEmitter<void>();

  timeOut: number = 5000;

  constructor() {
    this.setTimeout(this.timeOut,'constractor');
    this.userInactive.subscribe(() => {
console.log('coming from : ' + this.showedMinute);
      if (!this.showedMinute) {
        this.minuteAlert.emit();
        this.showedMinute = true;
        this.setTimeout(this.timeOut,'timer');
      } else {
        this.finalAlert.emit();
      }
    });
  }

  setTimeout(ms: number, msg: string) {
    // let x : number = setTimeout(() => this.userInactive.next(undefined), ms);

    this.userActivity = setTimeout(() => this.userInactive.next(undefined), ms);
  }

  refreshUserState() {
    clearTimeout(this.userActivity);
    this.showedMinute = false;
    this.setTimeout(this.timeOut,'mouse');
  }
}
