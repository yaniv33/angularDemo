import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements AfterViewInit {

  // https://developers.google.com/chart/interactive/docs/gallery
  // https://jsfiddle.net/api/post/library/pure/ - nice example for bar table with time

  // need to install npm install angular-google-charts
  // https://www.npmjs.com/package/angular-google-charts

  // in order to init variable google
  // must add to the index.html the following
  // <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

  @ViewChild('pieChart',{static : true}) pieChart!: ElementRef
  constructor() { }

  ngAfterViewInit() : void{
    console.log('hello');
    this.drawStackBarChart();
    this.drawMultiBarChart();
    this.drawPieChart();
    this.drawLineChart();
    this.drawDonateChart();
  }

  drawStackBarChart() {
    google.charts.load('current', {'packages': ['bar']});
    google.charts.setOnLoadCallback(drawChart);


    function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General','Western', 'Literature',
          { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
        ['2020', 16, 22, 23, 30, 16, 9, ''],
        ['2030', 28, 19, 29, 30, 12, 13, '']
      ]);

      const options = {
        height: 200,
        isStacked: true,
legend: 'none', // TODO  : not working
        vAxis: {format: 'decimal'},
        hAxis: {
          title: 'sum',
          format: ''},
        theme: 'material',
        series: {
          0: {color: '#fdd835'},
          1: {color: '#0091ff'},
          2: {color: '#e53935'},
          3: {color: '#43a047'},
        }
      };

      const chart = new google.charts.Bar(document.querySelector('#initial_chart_div'));
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }

  drawMultiBarChart() {
    google.charts.load('current', {'packages': ['bar']});
    google.charts.setOnLoadCallback(drawChart);


    function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General','Western', 'Literature',
          { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
        ['2020', 16, 22, 23, 30, 16, 9, ''],
        ['2030', 28, 19, 29, 30, 12, 13, '']
      ]);

      const options = {
        height: 200,
        isStacked: false,
        vAxis: {format: 'decimal'},
        hAxis: {format: ''},
        series: {
          0: {color: '#fdd835'},
          1: {color: '#0091ff'},
          2: {color: '#e53935'},
          3: {color: '#43a047'},
        }
      };

      const chart = new google.charts.Bar(document.querySelector('#multi_chart_div'));
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }

  drawPieChart() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
    // a second way of approaching the div is with viewChild .. needs to set the drawChart function out side of the current function
  }

  drawChart = () => {
    const data = google.visualization.arrayToDataTable([    ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ]);

    const options = {
      title: 'My Daily Activities',
      legend: {position: 'top'},
      is3D: true,
    };

    const chart = new google.visualization.PieChart(this.pieChart.nativeElement);
    chart.draw(data, options);
  }

  drawLineChart() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Date');
      data.addColumn('number', 'Price');
      data.addRows([
        ['Mar 14', 43],
        ['Nov 14', 39],
        ['Jan 15', 42],
        ['Mar 15', 37],
        ['Dec 15', 34],
        ['Feb 16', 40]
      ]);

      const options = {
        title: "Gold Prices",
        width: 600,
        height: 400,
        vAxis: {title: 'USD/kg'},
        legend: { position: "none" }
      };


      const chart = new google.visualization.LineChart(document.querySelector('#line_chart'));
      chart.draw(data, options);
    }
  }

  drawDonateChart() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      const data = google.visualization.arrayToDataTable([    ['Browser', 'Percentage'],
                                                              ['Firefox', 45.0],
                                                              ['IE', 26.8],
                                                              ['Chrome', 12.8],
                                                              ['Safari', 8.5],
                                                              ['Opera', 6.2],
                                                              ['Others', 0.7]
                                                            ]);

      const options = {
        pieHole:0.4
      };

      const chart = new google.visualization.PieChart(document.querySelector('#donate_chart'));
      chart.draw(data, options);
    }
  }

}
