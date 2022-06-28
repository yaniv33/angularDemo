import { Component, OnInit } from '@angular/core';
import {NgrxService} from "./ngrx.service";
import {concatMap, exhaustMap, map, mergeMap, switchMap} from "rxjs/operators";
import {fromEvent, interval, Observable, of, timer} from "rxjs";

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})



// https://www.youtube.com/watch?v=5wV8YppGfd0
export class NgrxComponent implements OnInit {

    remainingLabel = document.getElementById('remaining');

  nums1$ : Observable<number>;
  nums2$ : Observable<number>;
  nums3$ : Observable<number>;
  nums4$ : Observable<number>;

  constructor(private ngrx: NgrxService) {

//     fromEvent(this.remainingLabel, 'click')

    // this.nums1$ =ngrx.getNum1();
    // this.nums2$ =ngrx.getNum2();
    // this.nums3$ =ngrx.getNum3();
    // this.nums4$ =ngrx.getNum4();

//    ngrx.nums().subscribe(n => console.log(n));
//     ngrx.numsWithDelay().subscribe(n => console.log(n));
//    ngrx.getNum(5).subscribe(n => console.log(n));
//     ngrx.processNum(5).subscribe(n => console.log(n));
/*  */
    ngrx.nums().pipe(
    //   // map(n => ngrx.getNum(n))            // not working since map gives observable , not number
    //   // mergeMap(n => ngrx.getNum(n))   // converts the observable to number again
    //   // mergeMap(n => ngrx.processNum(n))   // converts the observable to number again
    //   concatMap(n => ngrx.getNum(n))   // deals with observable syncronically
    //   switchMap(n => ngrx.processNum(n))   // deals with the latest observalbe received , if new one comes , will drop the current and move to the new request
      exhaustMap(n => ngrx.processNum(n))   // deals with the current requet , overlooks new requests comming while processing

    ).subscribe(n => console.log(n));

  }

  do1(){
    const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x * 2, x * 3)));
    switched.subscribe(x => console.log(x));
  }

  do2(){
    timer(0, 5000)
      .pipe(
        switchMap(
          _ => interval(100),
          (outerValue, innerValue, outerIndex, innerIndex) => ({
            outerValue,
            innerValue,
            outerIndex,
            innerIndex
          })
        )
      ).subscribe(console.log)
  }


  // do1(){
  //   this.nums1$.pipe(
  //     // map(n => ngrx.getNum(n))            // not working since map gives observable , not number
  //     mergeMap(n => this.ngrx.getNum(n))   // converts the observable to number again
  //     // mergeMap(n => ngrx.processNum(n))   // converts the observable to number again
  //     // concatMap(n => ngrx.getNum(n))   // converts the observable to number again
  //   ).subscribe(n => console.log(n));
  //
  //   this.ngrx.nums();
  // }

  ngOnInit(): void {



  }

}

/*
*   9:00
*
* */
