import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreditCardManualFillingViewComponent} from "./credit-card-manual-filling-view/credit-card-manual-filling-view.component";
import {CreditCardListComponent} from "./credit-card-list/credit-card-list.component";
import {CreditPreviewComponent} from "./credit-preview/credit-preview.component";
import {TestCreditLayoutComponent} from "./test-credit-layout/test-credit-layout.component";
import {TestCreditLayout2Component} from "./test-credit-layout2/test-credit-layout2.component";
import {ANGULAR_MODULES, MATERIAL_MODULES} from "../../../export-class/exportModules";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {DESIGNS, getRoutes} from "../../../route-link-names";


const routes: Routes = getRoutes(DESIGNS);
/*
[
  {path: 'credit',      component: CreditCardManualFillingViewComponent},
  {path: 'credit-pre',  component: CreditCardListComponent},
  {path: 'dhl',         component: CreditPreviewComponent},
  {path: 'test',        component: TestCreditLayoutComponent},
  {path: 'test2',       component: TestCreditLayout2Component},
];
*/

@NgModule({
  declarations: [
    CreditPreviewComponent,
    CreditCardManualFillingViewComponent,
    CreditCardListComponent,
    TestCreditLayoutComponent,
    TestCreditLayout2Component,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MATERIAL_MODULES,
    ANGULAR_MODULES,

    RouterModule.forChild(routes)

  ],
  exports: [RouterModule],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class FolderTestModule { }

