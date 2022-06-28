import { Component } from '@angular/core';
import { getRouteAsRouteObj, goToRoute, MORE} from "../route-link-names";
import {ActivatedRoute, Router, } from "@angular/router";
import {prepareRouteAnimation } from "../route-animation";

@Component({
  selector: 'app-sub-more',
  templateUrl: './sub-more.component.html',
  styleUrls: ['./sub-more.component.css']
})
export class SubMoreComponent {

  choice: string = 'none';  // set to none (not '') due to error error  ExpressionChangedAfterItHasBeenCheckedError

  arrRoutes;
  prepareRoute = prepareRouteAnimation;

  parent = MORE;

  constructor( private route: ActivatedRoute,
               private router: Router ) {
    this.arrRoutes = getRouteAsRouteObj(this.parent);
  }

  onClick( route: { innerText: any; } ) {
    goToRoute( this.choice = route.innerText , this.route, this.router, this.parent  );
  }

}
