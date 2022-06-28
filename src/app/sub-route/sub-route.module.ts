
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './pack/route/route.component';
import { RoutePosComponent } from './pack/route-pos/route-pos.component';
import { RouterModule, Routes} from "@angular/router";
import {getRoutes, ROUTE} from "../route-link-names";

const routes: Routes = getRoutes(ROUTE);
/*
[
  { path:  'route'     ,  component: RouteComponent },
  { path:  'route/:id' ,  component: RouteComponent },
  { path:  'route-pos' ,  component: RoutePosComponent },
];
 */

@NgModule({
  declarations: [
    RouteComponent,
    RoutePosComponent
  ],
  exports:[
    RouteComponent ,
    RoutePosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // FlexModule,
  ]
})
export class SubRouteModule { }
