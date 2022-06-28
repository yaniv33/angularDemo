import { Component } from '@angular/core';
import {prepareRouteAnimation} from "../../../route-animation";
import {TOOLS, getRouteAsRouteObj, goToRoute} from "../../../route-link-names";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-a-folder-tools',
  templateUrl: './a-folder-tools.component.html',
  styleUrls: ['./a-folder-tools.component.scss']
})
export class AFolderToolsComponent {

  choice: string = 'none';  // set to none (not '') due to error error  ExpressionChangedAfterItHasBeenCheckedError
  arrRoutes;
  prepareRoute = prepareRouteAnimation;

  parent = TOOLS;

  constructor( private route: ActivatedRoute,
               private router: Router ) {
    this.arrRoutes = getRouteAsRouteObj(this.parent);
  }

  onClick( route: { innerText: any; } ) {
    goToRoute( this.choice = route.innerText , this.route, this.router, this.parent  );
  }
}
