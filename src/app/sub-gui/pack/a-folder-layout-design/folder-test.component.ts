import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DESIGNS, getRouteAsRouteObj, goToRoute} from "../../../route-link-names";
import {prepareRouteAnimation } from "../../../route-animation";

@Component({
  selector: 'app-folder-test',
  templateUrl: './folder-test.component.html',
  styleUrls: ['./folder-test.component.scss']
})
export class FolderTestComponent  {

  choice: string = 'none';  // set to none (not '') due to error error  ExpressionChangedAfterItHasBeenCheckedError
  arrRoutes;
  prepareRoute = prepareRouteAnimation;

  parent = DESIGNS;

  constructor( private route: ActivatedRoute,
               private router: Router ) {
    this.arrRoutes = getRouteAsRouteObj(this.parent);
  }

  onClick( route: { innerText: any; } ) {
    goToRoute( this.choice = route.innerText , this.route, this.router, this.parent  );
  }

}
