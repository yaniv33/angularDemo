import { Component} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import { getRouteAsRouteObj, goToRoute,  ROUTE} from "../route-link-names";
import {prepareRouteAnimation } from "../route-animation";

@Component({
  selector: 'app-sub-route',
  templateUrl: './sub-route.component.html',
  styleUrls: ['./sub-route.component.css']
})
export class SubRouteComponent {
  choice: string = 'none';  // set to none (not '') due to error error  ExpressionChangedAfterItHasBeenCheckedError

  arrRoutes;
  prepareRoute = prepareRouteAnimation;

  parent = ROUTE;

  constructor( private route: ActivatedRoute,
               private router: Router ) {
    this.arrRoutes = getRouteAsRouteObj(this.parent);
  }

  onClick( route: { innerText: any; } ) {
    goToRoute( this.choice = route.innerText , this.route, this.router, this.parent  );
  }

  // getRoute( name: { innerText: string; } ) {
  //   const route: routeObj | undefined = this.arrRoutes.find((route: routeObj ) => route.name === name.innerText);
  //   // return route ? (route.route? (route.route + (route.routeValue ? '/' + route.routeValue : '')) : route.name) : '';
  //   return route ? route.name +  (route.routeValue ? '/' + route.routeValue : ''): '';
  // }
  //
  // onClick( route: { innerText: any; } ) {
  //
  //   this.choice = route.innerText;
  //   this.router.navigate([this.getRoute(route)], { relativeTo: this.route });
  //
  // }
  //
  // prepareRouteAnimation( outlet: RouterOutlet ) {
  //   return outlet && outlet.activatedRouteData ;
  //   //return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  //   // return outlet?.activatedRouteData?.animation;
  // }
  //
  // getChoice( id1: { innerText: any; }){
  //   console.log(id1.innerText, this.choice ,id1.innerText === this.choice);
  //   return id1.innerText === this.choice;
  // }

}
