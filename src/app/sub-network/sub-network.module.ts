import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NetRestComponent} from './pack/net-rest/net-rest.component';
import {DashboardComponent} from './pack/heroes/dashboard/dashboard.component';
import {UrlGetComponent} from './pack/url-get/url-get.component';
import {MessagesComponent} from './pack/heroes/messages/messages.component';
import {HeroDetailComponent} from './pack/heroes/hero-detail/hero-detail.component';
import {HeroSearchComponent} from './pack/heroes/hero-search/hero-search.component';
import {HeroesComponent} from './pack/heroes/heroes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WebSocketClientComponent} from './pack/web-socket-client/web-socket-client.component';
import {WebChatComponent} from './pack/web-socket-client/web-chat/web-chat.component';
import {RouterModule, Routes} from '@angular/router';

// import {MytestComponent} from './pack/mytest/mytest.component';
// import {MytestserviceService} from './pack/mytest/mytestservice.service';
import {HttpClientModule} from "@angular/common/http";
import {HeroService} from "./pack/heroes/services/hero.service";
import {getRoutes, NETWORK} from "../route-link-names";
import {NetRestService} from "./pack/net-rest/net-rest.service";
import {FlexLayoutModule} from "@angular/flex-layout";


const routes: Routes = getRoutes(NETWORK);
  /*
  [
  { path:  'mytest' ,      component: MytestComponent } ,
  { path:  'net-rest' ,      component: NetRestComponent } ,
  { path:  'url-get/:name' , component: UrlGetComponent },
  { path:  'hero' ,          component: HeroesComponent },
  { path:  'hero/dashboard', component: DashboardComponent },
  { path:  'detail/:id' ,    component: HeroDetailComponent },
  { path:  'socket' ,        component: WebSocketClientComponent },
];
*/
@NgModule({
  declarations: [
    NetRestComponent,
    UrlGetComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    DashboardComponent,
    WebSocketClientComponent,
    WebChatComponent,
    // MytestComponent,

  ],
  exports : [
    // NetRestComponent,
    // UrlGetComponent,
    // HeroesComponent,
    // HeroDetailComponent,
    // MessagesComponent,
    // HeroSearchComponent,
    // DashboardComponent,
    // WebSocketClientComponent,
    // WebChatComponent,
    HttpClientModule,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
  , providers: [/*MytestserviceService , */HeroService, NetRestService]
})
export class SubNetworkModule { }

