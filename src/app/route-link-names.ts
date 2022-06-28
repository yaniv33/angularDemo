import {ActivatedRoute, LoadChildren, Router, RouterOutlet, Routes} from "@angular/router";
import {SubNetworkComponent} from "./sub-network/sub-network.component";
import {SubRouteComponent} from "./sub-route/sub-route.component";
import {SubFormsComponent} from "./sub-forms/sub-forms.component";
import {SubGuiComponent} from "./sub-gui/sub-gui.component";
import {SubMoreComponent} from "./sub-more/sub-more.component";
import {SubFunctionsComponent} from "./sub-functions/sub-functions.component";
import {Type} from "@angular/core";
import {StorageComponent} from "./sub-functions/pack/storage/storage.component";
import {DetectComponent} from "./sub-functions/pack/detect/detect.component";
import {PrintComponent} from "./sub-functions/pack/print/print.component";
import {ArrayFunctionsComponent} from "./sub-functions/pack/array-functions/array-functions.component";
import {PiechartComponent} from "./sub-gui/pack/a-folder-tools/piechart/piechart.component";
import {TableComponent} from "./sub-gui/pack/a-folder-tools/table/table.component";

import {QrComponent} from "./sub-gui/pack/a-folder-tools/qr/qr.component";
import {FlexComponent} from "./sub-gui/pack/flex/flex.component";

import {ParsersComponent} from "./sub-gui/pack/parsers/parsers.component";
import {CssComponent} from "./sub-gui/pack/css/css.component";
import {FolderTestComponent} from "./sub-gui/pack/a-folder-layout-design/folder-test.component";
import {StepperComponent} from "./sub-forms/pack/stepper/stepper.component";
import {FormComponent} from "./sub-forms/pack/form/form.component";
import {FormFlexComponent} from "./sub-forms/pack/form-flex/form-flex.component";
import {PopupComponent} from "./sub-forms/pack/popup/popup.component";
import {BindComponent} from "./sub-more/pack/bind/bind.component";
import {SoundComponent} from "./sub-more/pack/sound/sound.component";
import {CanvasComponent} from "./sub-more/pack/canvas/canvas.component";
import {MapComponent} from "./sub-more/pack/map/map.component";
import {WebCamComponent} from "./sub-more/pack/web-cam/web-cam.component";
// import {MytestComponent} from "./sub-network/pack/mytest/mytest.component";
import {NetRestComponent} from "./sub-network/pack/net-rest/net-rest.component";
import {UrlGetComponent} from "./sub-network/pack/url-get/url-get.component";
import {HeroesComponent} from "./sub-network/pack/heroes/heroes.component";
import {DashboardComponent} from "./sub-network/pack/heroes/dashboard/dashboard.component";
import {HeroDetailComponent} from "./sub-network/pack/heroes/hero-detail/hero-detail.component";
import {WebSocketClientComponent} from "./sub-network/pack/web-socket-client/web-socket-client.component";
import {RouteComponent} from "./sub-route/pack/route/route.component";
import {RoutePosComponent} from "./sub-route/pack/route-pos/route-pos.component";
import {CreditCardManualFillingViewComponent} from "./sub-gui/pack/a-folder-layout-design/credit-card-manual-filling-view/credit-card-manual-filling-view.component";
import {CreditCardListComponent} from "./sub-gui/pack/a-folder-layout-design/credit-card-list/credit-card-list.component";
import {CreditPreviewComponent} from "./sub-gui/pack/a-folder-layout-design/credit-preview/credit-preview.component";
import {TestCreditLayoutComponent} from "./sub-gui/pack/a-folder-layout-design/test-credit-layout/test-credit-layout.component";
import {TestCreditLayout2Component} from "./sub-gui/pack/a-folder-layout-design/test-credit-layout2/test-credit-layout2.component";
import {GoogleChartComponent} from "./sub-gui/pack/a-folder-tools/google-chart/google-chart.component";
import {AFolderToolsComponent} from "./sub-gui/pack/a-folder-tools/a-folder-tools.component";
import {GraphComponent} from "./sub-gui/pack/a-folder-tools/graph/graph.component";
import {GoogleChartTagComponent} from "./sub-gui/pack/a-folder-tools/google-chart-tag/google-chart-tag.component";
import {AnimationsComponent} from "./sub-gui/pack/animations/animations.component";
import {FirebaseComponent} from "./sub-more/pack/firebase/firebase.component";
import {FirebaseAppComponent} from "./sub-more/pack/firebase-app/firebase-app.component";
import {SubscribeComponent} from "./sub-functions/pack/subscribe/subscribe.component";
import {TestComponent} from "./sub-functions/pack/test/test.component";
import {NgrxComponent} from "./sub-functions/pack/ngrx/ngrx.component";

export interface routeObj {
  name: string;
  parent?: string;
  route?: string;
  routeValue?: string;
  path?: string;
  isHide?: boolean;
  component?: Type<any>;
  loadChildren?: LoadChildren;
  data?: any;
}

export const NETWORK  =  'Network';
export const FORMS    =  'Forms'  ;
export const GUI      =  'GUI'    ;
export const ROUTE    =  'Route'  ;
export const FUNCTION =  'Func'   ;
export const MORE     =  'More'   ;
export const DESIGNS     =  'Designs'   ;
export const TOOLS     =  'Tools'   ;

export const All_ROUTES : routeObj[]= [
  { name: NETWORK ,       component: SubNetworkComponent , loadChildren: () => import('./sub-network/sub-network.module').then(m => m.SubNetworkModule) ,    data: { animation: 'slideRight'}},
  { name: FORMS ,         component: SubFormsComponent ,   loadChildren: () => import('./sub-forms/sub-forms.module').then(m => m.SubFormsModule)  ,         data: { animation: 'slideLeft'}},
  { name: GUI ,           component: SubGuiComponent ,     loadChildren: () => import('./sub-gui/sub-gui.module').then(m => m.SubGuiModule) ,                data: { animation: 'slideRight'}},
  { name: FUNCTION ,      component: SubFunctionsComponent,loadChildren: ()=> import('./sub-functions/sub-functions.module').then(m => m.SubFunctionsModule),data: { animation: 'slideLeft'}},
  { name: ROUTE ,         component: SubRouteComponent ,   loadChildren: () => import('./sub-route/sub-route.module').then(m => m.SubRouteModule)  ,         data: { animation: 'slideRight'}},
  { name: MORE ,          component: SubMoreComponent ,    loadChildren: () => import('./sub-more/sub-more.module').then(m => m.SubMoreModule)  ,            data: { animation: 'slideLeft'}},

  { name: 'storage' ,     parent:FUNCTION,  component: StorageComponent} ,
  { name: 'detect' ,      parent:FUNCTION,  component: DetectComponent} ,
  { name: 'print' ,       parent:FUNCTION,  component: PrintComponent} ,
  { name: 'array-func' ,  parent:FUNCTION,  component: ArrayFunctionsComponent} ,
  { name: 'subscribe' ,   parent:FUNCTION,  component: SubscribeComponent} ,
  { name: 'ngrx' ,        parent:FUNCTION,  component: NgrxComponent} ,
  { name: 'test' ,        parent:FUNCTION,  component: TestComponent} ,
//{ path:  'store-nrgx' ,  component: StoreComponent} , // not working with angular 13


  { name:  'flex' ,       parent:GUI,       component: FlexComponent },
  { name:  'parses' ,     parent:GUI,       component: ParsersComponent },
  { name:  'css' ,        parent:GUI,       component: CssComponent },
  { name:  'animation' ,  parent:GUI,       component: AnimationsComponent },
  { name:  DESIGNS ,      parent:GUI,       component: FolderTestComponent, loadChildren: () => import('./sub-gui/pack/a-folder-layout-design/folder-test.module').then(m => m.FolderTestModule)  ,    data: { animation: 'slideRight'} },
  { name:  TOOLS ,        parent:GUI,       component: AFolderToolsComponent, loadChildren: () => import('./sub-gui/pack/a-folder-tools/a-folder-tools.module').then(m => m.AFolderToolsModule)  ,    data: { animation: 'slideRight'} },

  { name:  'stepper',     parent:FORMS,      component: StepperComponent},
  { name:  'form',       parent:FORMS,      component: FormComponent},
  { name:  'form-flex',  parent:FORMS,      component: FormFlexComponent},
  { name:  'popup',      parent:FORMS,      component: PopupComponent},

  { name:  'bind' ,         parent:MORE,    component:  BindComponent  },
  { name:  'sound' ,        parent:MORE,    component:  SoundComponent },
  { name:  'canvas' ,       parent:MORE,    component:  CanvasComponent },
  { name:  'map' ,          parent:MORE,    component:  MapComponent },
  { name:  'firebase' ,    parent:MORE,    component:  FirebaseComponent },
  { name:  'firebase-app' , parent:MORE,    component:  FirebaseAppComponent },

  // { name: 'mytest' ,        parent:NETWORK, component:  MytestComponent } ,
  { name: 'net-rest' ,      parent:NETWORK, component:  NetRestComponent } ,
  { name: 'hero' ,          parent:NETWORK, component:  HeroesComponent },
  { name: 'socket' ,        parent:NETWORK, component:  WebSocketClientComponent },
  { name: 'hero/dashboard', parent:NETWORK, component:  DashboardComponent  , isHide:true},
  { name: 'url-get' ,       parent:NETWORK, route: 'url-get/:name', component:  UrlGetComponent ,  routeValue:'yossi'},
  { name: 'detail' ,        parent:NETWORK, route: 'detail/:id',    component:  HeroDetailComponent , isHide:true},

  // Route html was excluded due to route1 complexity
  { name: 'route' ,          parent:ROUTE, component:  RouteComponent } ,
  { name: 'route1' ,        parent:ROUTE, route: 'route/:id',  component:  RouteComponent } ,
  { name: 'route-pos' ,     parent:ROUTE, component:  RoutePosComponent },

  { name:  'credit',          parent:DESIGNS, component: CreditCardManualFillingViewComponent},
  { name:  'credit-pre',      parent:DESIGNS, component: CreditCardListComponent},
  { name:  'dhl',             parent:DESIGNS, component: CreditPreviewComponent},
  { name:  'test',            parent:DESIGNS, component: TestCreditLayoutComponent},
  { name:  'test2',           parent:DESIGNS, component: TestCreditLayout2Component},

  { name:  'piechart' ,   parent:TOOLS,       component: PiechartComponent },
  { name: 'google-chart', parent:TOOLS,       component: GoogleChartComponent },
  { name:  'qr' ,         parent:TOOLS,       component: QrComponent },
  { name:  'table' ,      parent:TOOLS,       component: TableComponent },
  { name:  'graph' ,    parent:TOOLS,       component: GraphComponent },
  // { name:  'graph-tag', parent:TOOLS,       component: GoogleChartTagComponent },


];

export function getRouteAsRouteObj(parent?: string | undefined)  : routeObj[]{
  return All_ROUTES.filter((route: routeObj)=> route.parent === parent && !route.isHide);
}

export function getRoutes(parent?: string | undefined)  : Routes {
  return All_ROUTES.filter((route: routeObj)=> route.parent === parent)
                  .map(route => ({
                        path: (route.route ? route.route : route.name),
                        component: route.component,
                        loadChildren: route.loadChildren,
                        data: route.data
  }));
}

export function goToRoute(choice :string , active_route: ActivatedRoute, router: Router , parent?: string | undefined ) {
  const route: routeObj | undefined = getRouteAsRouteObj(parent).find((route: routeObj ) => route.name === choice);
  let route_name = route ? (route.route? route.route : route.name) : '';
  router.navigate([route_name], { relativeTo: active_route });
}

// export function getChoice( id1: { innerText: any; } , choice: string){
//   console.log(id1.innerText, choice ,id1.innerText === choice);
//   return id1.innerText === choice;
// }
