import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { getRoutes, TOOLS} from "../../../route-link-names";
import {GoogleChartTagComponent} from "./google-chart-tag/google-chart-tag.component";
import {GoogleChartComponent} from "./google-chart/google-chart.component";
import {PiechartComponent} from "./piechart/piechart.component";
import {QRCodeModule} from "angularx-qrcode";
import {ANGULAR_MODULES, MATERIAL_MODULES} from "../../../export-class/exportModules";
import {FlexLayoutModule} from "@angular/flex-layout";
import {QrComponent} from "./qr/qr.component";
import {TableComponent} from "./table/table.component";
import {GraphComponent} from "./graph/graph.component";
import {GraphInnerComponent} from "./graph/graph-inner/graph-inner.component";
import {GraphServiceService} from "./graph/graph-service.service";

const routes: Routes = getRoutes(TOOLS);

@NgModule({
  declarations: [
    GoogleChartComponent,
    GoogleChartTagComponent,
    PiechartComponent,
    QrComponent,
    TableComponent,
    GraphComponent,
    GraphInnerComponent,

  ],
  imports: [
    CommonModule,
    QRCodeModule,

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [GraphServiceService]
})
export class AFolderToolsModule { }
