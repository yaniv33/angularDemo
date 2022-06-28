import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindComponent } from './pack/bind/bind.component';
import { BindInnerComponent } from './pack/bind/bind-inner/bind-inner.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { SoundComponent } from './pack/sound/sound.component';
import { CanvasComponent } from './pack/canvas/canvas.component';
import { CanvasImpComponent } from './pack/canvas/canvasImp.component';
import { MapComponent } from './pack/map/map.component';

import {AudioContextModule} from "angular-audio-context";

// https://stackblitz.com/edit/agm-google-maps-api-wrapper-not-working-injswu?file=app%2Fapp.module.ts
// this package only supported until angular 11

// npm i @agm/core                          /// due to some issue fixed with changing on package.json to  "@agm/core": "1.0.0-beta.2",
// npm install --save @types/googlemaps     /// due to some issue fixed with npm i @types/googlemaps@3.39.13 --save-dev
import { AgmCoreModule,GoogleMapsAPIWrapper } from '@agm/core';

// npm i ngx-webcam
// npm install --save ngx-webcam
import { WebCamComponent } from './pack/web-cam/web-cam.component';
import { WebcamModule} from "ngx-webcam";
import { FlexLayoutModule} from "@angular/flex-layout";
import {getRoutes, MORE} from "../route-link-names";
import { FirebaseComponent } from './pack/firebase/firebase.component';
import { FirebaseAppComponent } from './pack/firebase-app/firebase-app.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { TaskComponent } from './pack/firebase-app/task/task.component';
import {MatCardModule} from "@angular/material/card";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { TaskDialogComponent } from './pack/firebase-app/task-dialog/task-dialog.component';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";

import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import { LocalBaseComponent } from './pack/firebase-app/local-base/local-base.component';
import { FireBaseComponent } from './pack/firebase-app/fire-base/fire-base.component';
import {MatStepperModule} from "@angular/material/stepper";

const routes: Routes = getRoutes(MORE);
  /*
  [
  { path:  'bind' , component: BindComponent  },
  { path:  'sound' ,  component: SoundComponent },
  { path:  'canvas' , component: CanvasComponent },
  { path:  'map' ,    component: MapComponent },
  { path:  'webcam' , component: WebCamComponent },
];

   */

@NgModule({
  declarations: [
    BindComponent,
    BindInnerComponent,
    SoundComponent,
    CanvasComponent,
    CanvasImpComponent,
    MapComponent,
    WebCamComponent,
    FirebaseComponent,
    FirebaseAppComponent,
    TaskComponent,
    TaskDialogComponent,
    LocalBaseComponent,
    FireBaseComponent,

  ],
  exports: [
    BindComponent,
    BindInnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebcamModule,
    FlexLayoutModule,

    MatToolbarModule, // for firebase-app (kanban-fire)
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    DragDropModule,
    MatInputModule,
    MatStepperModule,
    AngularFireModule.initializeApp(environment.firebase),    // firebase
    AngularFirestoreModule,

    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDjdnakc3hdT14c42Vi2ul5S_t7Df4Kl8E',
    }),

    AudioContextModule.forRoot('balanced'),
    RouterModule.forChild(routes),
  ],
  providers: [
      GoogleMapsAPIWrapper,
  ]
})
export class SubMoreModule { }
