import {Component, OnInit, ViewChild} from '@angular/core';
import {GraphInnerComponent} from './graph-inner/graph-inner.component';
import {GraphServiceService} from './graph-service.service';

// import {AsyncLocalStorage} from 'angular-async-local-storage';
import { LocalStorage } from '@ngx-pwa/local-storage';

import {Hero} from "../../../../export-class/hero";
// import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

// https://canvasjs.com/

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html'
  })
  export class GraphComponent implements OnInit {

  @ViewChild(GraphInnerComponent, {static: false}) child;

  msg  = '';

  constructor(private graphService: GraphServiceService , protected localStorage: LocalStorage ) {
    graphService.msgObj.asObservable().subscribe((value: any)=>{
        this.msg = value
      }
    )
  }

  ngOnInit() {}

  clickMeBar() {

    this.graphService.getGraphData()
      .subscribe(graphStract =>
          this.child.showGraph(graphStract.header, graphStract.type, graphStract.arrGraph)
      );

  }

  clickMePie() {
    this.graphService.getGraphData()
      .subscribe(graphStract =>
        this.child.showGraph(graphStract.header , 'pie', graphStract.arrGraph)
      );

  }


  readFrom(): void {
    this.localStorage.getItem('hero').subscribe(hero => {
      if (hero && hero != null) {
        const mhero: Hero = (hero as Hero);
        this.msg  ='got ' + mhero.id + ' ' + mhero.name;
      } else {
        this.msg  ='local storage named hero not found';
      }
    });
  }


}
