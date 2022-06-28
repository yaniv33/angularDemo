import { Component} from '@angular/core';
import {rocketObj} from "../array-functions/rockets";
import { of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  {

  constructor(private http: HttpClient) {
    // this.map();
  }

  rockets_copy : rocketObj[];


  map(){

    let rockets = [
      {country: 'Russia', launches: 32},
      {country: 'US',     launches: 23},
      {country: 'China',  launches: 16, isHide: true},
    ];

// this will work just fine  {
//     let rockets_new = rockets.map((rocket :any) => {
//       return {
//         country : rocket.country,
//         launches : 10,
//         isHide: rocket.isHide
//             }
//       });
//     console.log(rockets_new);
//  }

// this will not work
    return of(rockets).pipe(
                          map((rockets :any) => {
                            return rockets.map((rocket) => ({
                              country : rocket.country,
                              launches : rocket.launches,
                              isHide: rocket.isHide
                            }) )
                          })
                        );

  }
}
