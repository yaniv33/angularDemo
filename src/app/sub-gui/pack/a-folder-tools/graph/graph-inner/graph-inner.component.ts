import { Component, OnInit, Input} from '@angular/core';
import * as CanvasJS from '../../../../../../assets/canvasjs.min';

@Component({
  selector: 'app-graph-inner',
  template: ''
  })
export class GraphInnerComponent implements OnInit {

  @Input() chartDataInner;

  showGraph(header: string , barType: string , chartData) {
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {  text: header  },
      legend: {
        maxWidth: 350,
        itemWidth: 120
      },
      data: [{
        type: barType,
        showInLegend: true,
        legendText: '{label}',
        dataPoints: chartData
      }]
    });

    chart.render();
  }

  constructor() { }

  ngOnInit() {
  }

}
