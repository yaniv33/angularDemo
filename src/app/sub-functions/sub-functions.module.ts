import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";

// import { StoreComponent } from './pack/store-ngrx/store.component';
import {FormsModule} from "@angular/forms";



// THIS IS IMPLEMENTATION FOR ng2-redux
// the module constructor is pointing to the rootReducer defined in ngrx-store.ts
// the NgRedux<Type> tells which type the state would be
// by injecting private ngRedux : NgRedux<Type> to component , we can approach the reducer by this.ngRedux.dispatch({type: Action_name})
// the value returned is read by @select() Type.field and displayed in the html as (field | async)

//import {NgRedux, NgReduxModule} from "ng2-redux";
// import {IAppState, INITIAL_STATE,  rootReducer} from "./pack/store-ngrx/ngrx-store";
// import {MyAppState,INITIAL_STATE_2, myrootReducer} from "./pack/store-ngrx/ngrx-store2";
import {DetectComponent} from "./pack/detect/detect.component";
import {DetectInnerComponent} from "./pack/detect/detect-inner.component";
import {DetectPushComponent} from "./pack/detect/detect-push.component";
import {DetectBehaviorComponent} from "./pack/detect/detect-behavior.component";
import {DetectTuneComponent} from "./pack/detect/detect-tune.component";
import {PrintComponent} from "./pack/print/print.component";
import { PrintInnerComponent } from './pack/print/print-inner/print-inner.component';
import { StorageComponent } from './pack/storage/storage.component';
import { ArrayFunctionsComponent } from './pack/array-functions/array-functions.component';
import {FUNCTION, getRoutes} from "../route-link-names";
import { SubscribeComponent } from './pack/subscribe/subscribe.component';
import {HttpClientModule} from "@angular/common/http";
import { TestComponent } from './pack/test/test.component';
import { NgrxComponent } from './pack/ngrx/ngrx.component';
// import { NgRedu } from './pack/store/store.component';


const routes: Routes = getRoutes(FUNCTION);
  /*
  [
  // { path:  'store-nrgx' ,  component: StoreComponent} , // not working with angular 13
  { path:  'storage' ,     component: StorageComponent} ,
  { path:  'detect' ,      component: DetectComponent},
  { path:  'print' ,       component: PrintComponent },
  { path:  'array-func' ,  component: ArrayFunctionsComponent },
];
*/

@NgModule({
  declarations: [
    DetectComponent,
    DetectInnerComponent,
    DetectPushComponent,
    DetectBehaviorComponent,
    DetectTuneComponent,
    PrintComponent,
    PrintInnerComponent,
    // StoreComponent,
    StorageComponent,
    ArrayFunctionsComponent,
    SubscribeComponent,
    TestComponent,
    NgrxComponent,
  ],
  imports: [
    CommonModule,

    FormsModule,
    HttpClientModule,
    // NgReduxModule,
    RouterModule.forChild(routes),
    // StoreModule.forRoot({ users : Reducers })
    // StoreModule.forRoot({ count: counterReducer })
  ],
  exports : [
    // SubFunctionsComponent,
  ]
})

export class SubFunctionsModule { }
/*
export class SubFunctionsModule {
  constructor(ngRedux: NgRedux<IAppState>,
              // ngRedux2: NgRedux<MyAppState>
    ) {
    ngRedux.configureStore(rootReducer , INITIAL_STATE);
    // ngRedux2.configureStore(myrootReducer , INITIAL_STATE_2); // attempt to create 2 stores did not succeed
  }

}

*/
