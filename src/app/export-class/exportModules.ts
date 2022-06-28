import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatCommonModule, MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatBadgeModule} from "@angular/material/badge";
import {MatStepperModule} from "@angular/material/stepper";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";

export const ANGULAR_MODULES: any[] = [
  FormsModule, ReactiveFormsModule, RouterModule
];

export const MATERIAL_MODULES: any[] = [
  MatButtonModule, MatCardModule, MatIconModule, MatGridListModule,
  MatDividerModule, MatRippleModule,
  MatListModule, MatMenuModule, MatTooltipModule, MatCommonModule,
  MatSlideToggleModule, MatInputModule, MatCheckboxModule, MatExpansionModule,
  MatToolbarModule, MatSnackBarModule, MatSidenavModule, MatChipsModule, MatAutocompleteModule,
  MatTabsModule, MatSelectModule, MatDialogModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule,
  MatSnackBarModule,
  MatBadgeModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
];
