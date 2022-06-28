import { Component} from '@angular/core';
import {getRouteAsRouteObj, goToRoute, FORMS} from "../route-link-names";
import {prepareRouteAnimation } from "../route-animation";

import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-sub-forms',
  templateUrl: './sub-forms.component.html',
  styleUrls: ['./sub-forms.component.css']
})
export class SubFormsComponent {

  choice: string = 'none';  // set to none (not '') due to error error  ExpressionChangedAfterItHasBeenCheckedError

  arrRoutes;
  prepareRoute = prepareRouteAnimation;

  parent = FORMS;

  constructor( private route: ActivatedRoute,
               private router: Router ) {
    this.arrRoutes = getRouteAsRouteObj(this.parent);
  }

  onClick( route: { innerText: any; } ) {
    goToRoute( this.choice = route.innerText , this.route, this.router, this.parent  );
  }

}
