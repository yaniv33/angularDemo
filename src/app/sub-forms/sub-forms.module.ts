import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepperComponent} from "./pack/stepper/stepper.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from "./pack/form/form.component";
import {RouterModule, Routes} from "@angular/router";
import {FormFlexComponent} from './pack/form-flex/form-flex.component';
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {PopupComponent} from './pack/popup/popup.component';
import {DialogComponent} from './pack/popup/dialog/dialog.component';
import {ExampleDialogComponent} from './pack/popup/dialog/example-dialog/example-dialog.component';

//import {MatFormFieldModule, MatStepperModule} from "@angular/material";
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

// https://www.npmjs.com/package/angular-cc-library
import {CreditCardDirectivesModule} from 'angular-cc-library';

// snack bar
import {SnackBarComponent} from './pack/popup/snack-bar/snack-bar.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {InnerSnackBarComponent} from './pack/popup/snack-bar/inner-snack-bar/inner-snack-bar.component';

// npm i ngx-countdown
import {CountDownComponent} from './pack/popup/count-down-view/count-down/count-down.component';
import {CountDownViewComponent} from './pack/popup/count-down-view/count-down-view.component';
import {CountdownGlobalConfig, CountdownModule} from 'ngx-countdown';

// for dialogs
import {MatDialogModule} from '@angular/material/dialog';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {FORMS, getRoutes} from "../route-link-names";
// import {FormGuiComponent} from './pack/form-gui/form-gui.component';

const routes: Routes =  getRoutes(FORMS);
  /*
  [
  {path: 'stepper', component: StepperComponent},
  {path: 'form', component: FormComponent},
  {path: 'form-flex', component: FormFlexComponent},
  // {path: 'form-ui', component: FormGuiComponent},
  // { path:  'snack-bar' ,     component: SnackBarComponent },
  {path: 'popup', component: PopupComponent},
];
*/
@NgModule({
    declarations: [
        StepperComponent,
        FormComponent,
        FormFlexComponent,
        SnackBarComponent,
        CountDownComponent,
        InnerSnackBarComponent,
        PopupComponent,
        CountDownViewComponent,
        CountDownViewComponent,
        DialogComponent,
        ExampleDialogComponent,
        // FormGuiComponent,
    ],
    exports: [
        StepperComponent,
        FormComponent,
        FormFlexComponent,
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatIconModule,
        MatFormFieldModule,
        MatStepperModule,
        MatExpansionModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatDatepickerModule,
        FlexLayoutModule,
        CreditCardDirectivesModule,
        MatSnackBarModule,
        MatSelectModule,
        FormsModule,
        MatGridListModule,
        CountdownModule,
        RouterModule.forChild(routes),
        MatDialogModule,
    ],
    providers: [
        CountdownGlobalConfig
    ]
})
export class SubFormsModule {
}
