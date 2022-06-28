import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-url-get',
  templateUrl: './url-get.component.html'
  // ,styleUrls: ['./url-get.component.css']
})
export class UrlGetComponent implements OnInit {

  name: string;

  ninjas;

  friends = [
    {fname: 'John', age: 25},
    {fname: 'Mary', age: 40},
    {fname: 'Peter', age: 85}
  ];

  public users = [
    { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 }
  ];

  constructor(private route: ActivatedRoute) {
    this.name = route.snapshot.params['name'];

    this.ninjas = [
      {name: 'Yoshi',  belt1 : 'black' },
      {name: 'Yoshi1', belt1 : 'red' },
      {name: 'Yoshi2', belt1 : 'blue' }
    ];

  }

  ngOnInit() {
    // this.ninjas = [
    //   {name: 'Yoshi',  belt1 : 'black' },
    //   {name: 'Yoshi1', belt1 : 'red' },
    //   {name: 'Yoshi2', belt1 : 'blue' }
    // ];

  }

  // onSelect(user: users): void {
  //   //   this.selectedHero = hero;
  //   // }


}
