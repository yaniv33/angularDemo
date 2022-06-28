import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-chart-tag',
  templateUrl: './google-chart-tag.component.html',
  styleUrls: ['./google-chart-tag.component.css']
})
export class GoogleChartTagComponent implements OnInit {

  // TODO could not get this way to work
  // this is the example i was following : https://stackblitz.com/edit/google-charts-playground?file=src%2Fapp%2Fapp.component.html
  // // need to use the following if you use the tags <google-chart>
  // // did not work , got  An accessor cannot be declared in an ambient context
  // // import {GoogleChartsModule} from "angular-google-charts";
  // // import {DataTableService} from "angular-google-charts/lib/services/data-table.service";

  chartData = [
    ['London', 8136000],
    ['Madrid', 5538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ];

  columnNames = ['City', 'Inhabitants'];

  options = {
    chart: {
      title: 'Inhabitants by city'
    },
    legend: {
      position: 'bottom'
    }

  };

  constructor() {
    console.log('helo');
  }

  ngOnInit() {
  }

}
