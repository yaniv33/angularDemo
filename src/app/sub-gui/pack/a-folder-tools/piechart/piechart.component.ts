import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../../assets/canvasjs.min';

// https://canvasjs.com/

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html'
  // ,styleUrls: ['./graph.component.css']
})
export class PiechartComponent implements OnInit {

  mname =  'Gaming Consoles Sold in 2012';

  constructor() { }

  ngOnInit() {

    const chart = new CanvasJS.Chart('chartContainer',
      {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: this.mname
        },
        legend: {
          maxWidth: 350,
          itemWidth: 120
        },
        data: [
          {
            type: 'pie',
            showInLegend: true,
            legendText: '{indexLabel}',
            dataPoints: [
              { y: 41, indexLabel: 'PlayStation 3' },
              { y: 21, indexLabel: 'Wii' },
              { y: 31, indexLabel: 'Xbox 360' },
              { y: 11, indexLabel: 'Nintendo DS'},
              { y: 17, indexLabel: 'PSP' },
              { y: 43, indexLabel: 'Nintendo 3DS'},
              { y: 17, indexLabel: 'PS Vita'}
            ]
          }
        ]
      });

    chart.render();

  }

}
