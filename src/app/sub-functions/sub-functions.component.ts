import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {getRouteAsRouteObj, goToRoute, FUNCTION} from "../route-link-names";
import {prepareRouteAnimation } from "../route-animation";



@Component({
  selector: 'app-sub-functions',
  templateUrl: './sub-functions.component.html',
  styleUrls: ['./sub-functions.component.css']
})
export class SubFunctionsComponent  {

  choice: string = 'none';  // set to none (not '') due to error error  ExpressionChangedAfterItHasBeenCheckedError

  arrRoutes;
  prepareRoute = prepareRouteAnimation;

  parent = FUNCTION;

  constructor( private route: ActivatedRoute,
               private router: Router ) {
    this.arrRoutes = getRouteAsRouteObj(this.parent);
  }

  onClick( route: { innerText: any; } ) {
    goToRoute( this.choice = route.innerText , this.route, this.router, this.parent  );
  }

}
