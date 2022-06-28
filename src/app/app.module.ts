import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubRouteComponent } from './sub-route/sub-route.component';
import { SubNetworkComponent } from './sub-network/sub-network.component';
import { LayoutModule } from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SubFormsComponent} from "./sub-forms/sub-forms.component";
import {SubGuiComponent} from "./sub-gui/sub-gui.component";
import {SubMoreComponent} from "./sub-more/sub-more.component";
import {SubFunctionsComponent} from "./sub-functions/sub-functions.component";
import {RouterModule, Routes} from "@angular/router";
import { getRoutes} from "./route-link-names";

const routes: Routes = getRoutes();

@NgModule({
  declarations: [
    AppComponent,
    SubRouteComponent,
    SubNetworkComponent,
    SubFormsComponent,
    SubGuiComponent,
    SubMoreComponent,
    SubFunctionsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,

    RouterModule.forRoot(routes)

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
