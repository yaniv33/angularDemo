import { Component, OnInit } from '@angular/core';

// https://momentjs.com/    npm install moment --save
import * as moment from 'moment';

@Component({
  selector: 'app-parsers',
  templateUrl: './parsers.component.html',
  styleUrls: ['./parsers.component.css']
})
export class ParsersComponent{

  startDate: moment.Moment    = moment('1/1/2017')
  currentDate: moment.Moment  = moment();
  currentTime: string         = moment().format('M/D/YYYY hh:mm:ss a');
  daysFrom2017: number        = this.currentDate.diff(moment('1/1/2017'), 'days');
  humanized: string           = moment.duration(moment().diff(this.startDate)).humanize();
  humanizedNow: string        = moment.duration(moment().diff(moment())).humanize();
  weeks: number               = moment().diff(this.startDate, 'week');



  // moment:any;
  todayInString:any;


  constructor() {

    console.log('Days from 1/1/2017:', this.daysFrom2017);
    console.log('Current Time:', this.currentTime);

    // this.moment=moment;
    this.todayInString = moment().format('LLLL')
  }

  getParse(format :string){
    return moment().format(format);
  }

  getMonthOnly(){
    return moment().format('lll').split(" ", 3);
  }

  changeLocal(local :string){
    moment.locale(local);
  }

  test(){
    return moment('2017', 'LLLL', 'he').format('LLLL');
    // return moment(null, null, 'en').format('lll');
  }

}
