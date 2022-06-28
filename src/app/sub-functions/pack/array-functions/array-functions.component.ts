import {Component} from '@angular/core';
import {SubscribeService} from "../subscribe/subscribe.service";

import {HttpClient} from "@angular/common/http";

import { tap, map} from 'rxjs/operators';
import {from, of} from "rxjs";
import {rocketObj} from "./rockets";

@Component({
  selector: 'app-array-functions',
  templateUrl: './array-functions.component.html',
  styleUrls: ['./array-functions.component.scss']
})

// filter
// reduce

/*

this.rockets.slice().splice(1,2)
*/
export class ArrayFunctionsComponent {

    rockets :rocketObj[] = [
        {country: 'Russia', launches: 32},
        {country: 'US',     launches: 23},
        {country: 'China',  launches: 16, isHide: true},
        {country: 'Europe(ESA)', launches: 7, isHide: true},
        {country: 'India', launches: 4},
        {country: 'Japan', launches: 54}
      ];

    constructor(private subscribeService: SubscribeService,
              private http: HttpClient) {

  }

  viewRocketFull(rocket){
    return  '(' +rocket.country + ',' +rocket.launches + ',' +rocket.isHide + ' )';
  }

  viewRocket(rocket){
    return  rocket.country  + ',';
  }

  findIndex(country: string ){
    return  this.rockets.findIndex(rocket => rocket.country === country);
  }

  unshift(){
    return  this.rockets.unshift({country: 'Israel', launches: 21});
  }

  forEach(){
    let result : string[] = [];
    for(const[i, rocket] of this.rockets.entries())
      if (!rocket.isHide || rocket.isHide)
        result.push(rocket.country+ ' launched :  ' + rocket.launches + ';');

    return result;
  }


  map(){

    return of(this.rockets).pipe(                // of will take array and return observable
      map((rockets :any) => {            // this map a rxjs function - returns the full array to be used as observable
        return rockets.map((rocket) => ({       // this map a array function , will take each item and change it accordingly
          country : rocket.country,
          launches : 10,
          isHide: rocket.isHide
        }) )
      })
    );

  }

  slice(start: number, end: number){
    return this.rockets.slice(start, end);
  }


  removed;
  splice(){

      let list = this.rockets.slice();

      this.removed =  list.splice (1 ,2 ,    {country: 'colombia', launches: 14},
                                                            {country: 'Ghana', launches: 13} );
      return list;
  }

  splice_removed(){
    return this.removed;
  }

  filter(){
    return this.rockets.filter((value: any) => !value.isHide)
  }

  some(){ // return boolean if any apply for the condition
    return this.rockets.some((value: any) => value.launches > 2)
  }

  every(){ // check all elements for a condition
    return this.rockets.every((value: any) => !value.isHide)
  }

  includes(){
    return this.rockets.includes({country: 'Israel', launches: 21})
  }

  sort(){
    return this.rockets.slice().sort((a, b) => a.launches - b.launches);
  }


  reduce(){
   let total = [0, 1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue);
    let result = this.rockets.reduce((rocket_accumulate , rocket_current  ) =>{

//      assigns the first value to rocket_accumulate , and start compare from the secound item

        if (rocket_accumulate.launches < rocket_current.launches)
          rocket_accumulate = rocket_current;
         return rocket_accumulate;

      });

    return result;
  }


  someExamples(){


    // this.rocket = rockets.filter((value: any) => !value.isHide);


    // const launchOptimistic = rockets.map(elem => (
    //   {
    //     country: elem.country,
    //     launches: elem.launches + 10
    //   }
    // ));


    // console.log(launchOptimistic);


    // 1

    const list = [{
      id: 'abc',
      data: [ {key: '1', value: 'car'},
        {key: '2', value: 'bus'},
        {key: '3', value: 'bike'},
        {key: '4', value: 'truck'},
        {key: '5', value: 'jeep'},],
    },
      {
        id: 'def', data: [{key: '1', value: 'car'},
          {key: '2', value: 'bicycle'},
          {key: '3', value: 'train'},
          {key: '4', value: 'aeroplane'},
          {key: '5', value: 'jeep'},],
      },
    ];


    function search(arr, searchVal) {
      return arr.map((item) => {
        const data = item.data.filter(({value}) => value === searchVal);
        return {...item, data};
      })
        .filter(({data}) => data.length);
    }


    console.log(search(list, 'car'));
    console.log(search(list, 'truck'));

    // 2

    let a = [{a: 1}, {a: 2}, {a: 1}]
      .map(value => {
        return {a: value.a * 2}
      })
      .filter(value => value.a === 4)
      .reduce((prev, cur) => {
        console.log(prev, cur);
        return cur
      });

    this.videoExamples2();
    this.map();
  }

  try(){
    //emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);           // observable
//add 10 to each value
    const example = source.pipe(map(val => val + 10)); // observable
//output: 11,12,13,14,15
    const subscribe = example.subscribe(val => console.log(val)); // subscriber
  }

// https://www.youtube.com/watch?v=hiLQn4ktjyo
  videoExamples() {
// concat arrays
    let arr1 = [1, 2];
    let arr2 = [1, 2];

    let result = arr1.concat(arr2);
    let result2 = [...arr1, ...arr2, 6, 7, 8];

// implement object within object
    const oldState = {
      data: [],
      isLoading: false
    }

    const newState = {
      ...oldState,
      isLoading: true // this will over ride the isLoading of oldState
    }

// elvis oporator
    let bar;
    const baz = bar?.baz?.dd || "defualt";


// UNABLE TO ACCESS URLS , DUE TO PROXY
// use fetch
    const someFn = () => {
      fetch("https://api.github.com/users/farskid/repos")
        .then((res) => {
          res.json;
        })
        .then((data) => {
          console.log(data);
        })
    }

    const someFn1 = async () => {
      const res = await fetch('https://api.github.com/users/farskid/repos');
      const data = await res.json();
      console.log(data);
    }

  }

// https://www.youtube.com/watch?v=lReVSh_7bKs
  videoExamples2() {

    let download = this.http.get<any>('https://api.github.com/users/farskid/repos');

download.pipe(
  tap(() => console.log('HTTP request executed')),
  map((res :any) => {
          return res
            .map(user => ({
                                    id : 20,
                                    node_id: user.node_id,
                                    name: user.name
                        }) )
        })
        )
  .subscribe(
    courses => { console.log('courses',courses) }
  );


  }

  // videoExamples3() {
  //   let download = this.http.get<any>('https://api.github.com/users/farskid/repos');
  //   download.subscribe({
  //     next: (value) =>      {console.log('3',value);}
  //   })
  // }

  getLength(event) {
    return event.length;
  }

}
