import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  is_ngstyle = false;
  is_ngclass = false;

  getLblStyle(){
    return this.is_ngstyle ? {
      'font-weight': 'bold',
    }:{
      'font-weight': 'normal',
    };
  }

}
