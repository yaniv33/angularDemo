import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ParsersComponent } from './pack/parsers/parsers.component';
import { FlexComponent } from './pack/flex/flex.component';

// https://www.npmjs.com/package/angularx-qrcode  npm i angularx-qrcode
import { QRCodeModule } from 'angularx-qrcode';

import {FlexLayoutModule} from '@angular/flex-layout';
import { MyPipePipe } from './pack/parsers/my-pipe.pipe';
import { MomentPipePipe } from './pack/parsers/moment-pipe.pipe';
import { CssComponent } from './pack/css/css.component';
import {FolderTestComponent} from './pack/a-folder-layout-design/folder-test.component';
import {HttpClientModule} from "@angular/common/http";
import {ANGULAR_MODULES, MATERIAL_MODULES} from "../export-class/exportModules";
import {getRoutes, GUI} from "../route-link-names";

import { AFolderToolsComponent } from './pack/a-folder-tools/a-folder-tools.component';
import { AnimationsComponent } from './pack/animations/animations.component';

// needed for animations ..
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// https://momentjs.com/



// https://www.npmjs.com/package/ng-qrcode
// import { QrCodeModule } from 'ng-qrcode';

// to use google charts - need to install npm install angular-google-charts

// need to use the following if you use the tags <google-chart>
// did not work , got  An accessor cannot be declared in an ambient context

// update 04.05.2022 - not working on angular 13  - https://github.com/FERNman/angular-google-charts/pull/254
// import {GoogleChartsModule} from "angular-google-charts";
// import {DataTableService} from "angular-google-charts/lib/services/data-table.service";


const routes: Routes = getRoutes(GUI);

@NgModule({
  declarations: [



    FlexComponent,
    ParsersComponent,
    MyPipePipe,
    MomentPipePipe,
    CssComponent,
    FolderTestComponent,
    AFolderToolsComponent,
    AnimationsComponent,
  ],
  exports : [
  ],
  imports: [
    CommonModule,
    // QRCodeModule,

    MATERIAL_MODULES,
    ANGULAR_MODULES,

    FlexLayoutModule,
    RouterModule.forChild(routes),
    HttpClientModule,

    // BrowserAnimationsModule,

    // GoogleChartsModule.forRoot(),

  ],
  providers: [

  ]
})
export class SubGuiModule { }
