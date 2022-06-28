import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {simplePopAnimation, simplePopWithSlideAnimation} from './route-animation';
import {getRouteAsRouteObj , goToRoute } from "./route-link-names";
import {prepareRouteAnimation } from "./route-animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // animations: [simplePopWithSlideAnimation],
  animations: [simplePopAnimation],

})

export class AppComponent {
  title: string  = 'myDemo';
  choice: string = 'none';  // set to none (not '') due to error error  ExpressionChangedAfterItHasBeenCheckedError

  arrRoutes;
  prepareRoute = prepareRouteAnimation;

  constructor( private route: ActivatedRoute,
               private router: Router ) {
    this.arrRoutes = getRouteAsRouteObj();
  }

  onClick( route: { innerText: any; } ) {
    goToRoute( this.choice = route.innerText , this.route, this.router  );
  }

  ltr: boolean = true;

  getLblStyle(){
    return {
      'direction': (this.ltr  ? 'ltr' : 'rtl')
    };
  }

}



// getRoute( name: { innerText: string; } ) : string{
//   const route: routeObj | undefined = this.arrRoutes.find((route: routeObj ) => route.name === name.innerText);
//   return route ? (route.route? route.route : route.name) : '';
// }



// getChoice = getChoice;
// prepareRouteAnimation( outlet: RouterOutlet ) {
//   return outlet && outlet.activatedRouteData /* && outlet.activatedRouteData.animation */;
//   //return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
//   // return outlet?.activatedRouteData?.animation;
// }

// getChoice( id1: { innerText: any; }){
//   console.log(id1.innerText, this.choice ,id1.innerText === this.choice);
//   return id1.innerText === this.choice;
// }
