import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import { getRouteAsRouteObj, goToRoute, GUI, routeObj} from "../route-link-names";
import {prepareRouteAnimation } from "../route-animation";
import {simplePopAnimation} from "../route-animation";

@Component({
  selector: 'app-sub-gui',
  templateUrl: './sub-gui.component.html',
  styleUrls: ['./sub-gui.component.css'],
  animations: [simplePopAnimation],
})
export class SubGuiComponent{

  choice: string = 'none';  // set to none (not '') due to error error  ExpressionChangedAfterItHasBeenCheckedError
  arrRoutes;
  prepareRoute = prepareRouteAnimation;

  currentRouteObj: routeObj;
  parent = 'GUI';

  constructor( private route: ActivatedRoute,
               private router: Router ) {
    this.arrRoutes = getRouteAsRouteObj(this.parent);
  }

  onClick( route: { innerText: any; } , currentRouteObj: routeObj ) {
    this.currentRouteObj = currentRouteObj;
    goToRoute( this.choice = route.innerText , this.route, this.router, this.parent  );
  }


}
