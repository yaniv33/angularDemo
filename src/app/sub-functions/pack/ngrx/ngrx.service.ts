import { Injectable } from '@angular/core';
import {  fromEvent, merge, empty , interval, Observable, Subject} from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgrxService {

  public nums1 = new Subject<number>();
  public nums2 = new Subject<number>();
  public nums3 = new Subject<number>();
  public nums4 = new Subject<string>();

// // elem refs
//   remainingLabel = document.getElementById('remaining');
//   pauseButton = document.getElementById('pause');
//   resumeButton = document.getElementById('resume');

// streams

  constructor() {

    // let interval = interval(1000).pipe(mapTo(-1));
    // let pause    = fromEvent(this.pauseButton, 'click').pipe(mapTo(false));
    // let resume = fromEvent(this.resumeButton, 'click').pipe(mapTo(true));
    //
    //
    // const interval$ = interval(1000).pipe(mapTo(-1));
    // const pause$ = fromEvent(this.pauseButton, 'click').pipe(mapTo(false));
    // const resume$ = fromEvent(this.resumeButton, 'click').pipe(mapTo(true));
    //
    // const timer$ = merge(pause$, resume$)
    //   .pipe(
    //     startWith(true),
    //     switchMap(val => (val ? interval$ : empty())),
    //     scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
    //     takeWhile(v => v >= 0)
    //   )
    //   .subscribe((val: any) => remainingLabel.innerHTML = val);

  }

  getNum1() : Observable<number>{
    return this.nums1.asObservable();
  }
  getNum2() : Observable<number>{
    return this.nums2.asObservable();
  }
  getNum3() : Observable<number>{
    return this.nums3.asObservable();
  }
  getNum4() : Observable<string>{
    return this.nums4.asObservable();
  }
  /*
  nums(){
    for (let i = 1; i < 8; i++)
      this.nums1.next(i);
  }

  numsWithDelay(){
      for (let i = 1; i <= 3 ; i++){
        this.nums2.next(i);
        if (i === 3) {

          setTimeout (() => {   // setInterval - runs multiple times , setTimeout - runs once
            for (let i = 4; i < 8; i++)
              this.nums2.next(i);
          },1000,)
        }
      }


  }

  getNum(num : number){
      this.nums3.next(num);
  }

  processNum(num : number){
    setTimeout (() => {   // setInterval - runs multiple times , setTimeout - runs once
      for (let i = 1; i < 3; i++)
        this.nums4.next(num + ' ' + i);

    },1000,)

    return this.nums4.asObservable();
  }
*/

  nums(){
    setTimeout (() => {   // setInterval - runs multiple times , setTimeout - runs once
      for (let i = 1; i < 8; i++)
        this.nums1.next(i);

    },1000,)

    return this.nums1.asObservable();
  }

  numsWithDelay(){
    setTimeout (() => {   // setInterval - runs multiple times , setTimeout - runs once
      for (let i = 1; i <= 3 ; i++){
        this.nums2.next(i);
        if (i === 3) {

          setTimeout (() => {   // setInterval - runs multiple times , setTimeout - runs once
            for (let i = 4; i < 8; i++)
              this.nums2.next(i);
          },1000,)
        }
      }


    },1000,)

    return this.nums2.asObservable();
  }

  getNum(num : number){
    setTimeout (() => {   // setInterval - runs multiple times , setTimeout - runs once
        this.nums3.next(num);

    },1000,)

    return this.nums3.asObservable();
  }

  processNum(num : number){
    setTimeout (() => {   // setInterval - runs multiple times , setTimeout - runs once
      for (let i = 1; i < 3; i++)
        this.nums4.next(num + ' ' + i);

    },1000,)

    return this.nums4.asObservable();
  }

}
