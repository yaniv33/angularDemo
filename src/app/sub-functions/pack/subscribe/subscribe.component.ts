import {Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef} from '@angular/core';
import {SubscribeService} from "./subscribe.service";
import {Observable, of, retry, share, Subscription} from "rxjs";
import {switchMap} from "rxjs-compat/operator/switchMap";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit, OnDestroy {
  // https://www.youtube.com/watch?v=ejjln8hI14M
  users1: string[];
  users2: string[] | undefined;
  userSubscription: Subscription;

  users$ : Observable<string[]>;
  output$ : Observable<string>;

  constructor(private subscribeService: SubscribeService,
              // ngZone: NgZone,
              // cdRef: ChangeDetectorRef
  ) {

    // CORRECT WAY :
    this.users$  = this.subscribeService.getUsers();
    this.output$ = this.subscribeService.getOutPut();

  }

  ngOnInit(): void {

//    WRONG WAY 1 : use subscription
    this.userSubscription = this.subscribeService.getUsers().subscribe((users)=>{
      this.users1 = users;
    })

    // WRONG WAY 2 : use promise
    this.subscribeService.getUsers().toPromise().then((user :string[] | undefined) => {this.users2 = user});

    console.log('init', this.subscribeService);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  identify(index : number , value: string){ // not sure why subscribeService is undefined
    // this.subscribeService;
    console.log('before',index ,value, this.subscribeService);
    // this.subscribeService?.setToOutput('my data'+ index + ' ' + value);
    // console.log('after',index ,value, this.subscribeService);
    return value;
  }

  doInObservable(){
    this.users$
  }

  // tmp(){ // rxjs
  //   let obs  = this.users$.pipe(
  //     // switchMap(() => interval(1000))
  //     switchMap ((authUser) => of(null))
  //     //     if (authUser ?.value){
  //     //
  //     //     }else{
  //     //
  //     //     }
  //     //   }
  //     // )
  //     catchError( err => {
  //         if (err = 'permission denied')
  //           return of(null)
  //         else
  //           throw new Error(createUserOutput.error);
  //     } )
  //     // retry(), // if catch erro fails , it will go back to the start with copy observable
  //     // share()  // will share reply between all subscribers
  //   );
  //   obs.subscribe(
  //     userData=>{
  //
  //     },
  //     onError =>{
  //
  //     },
  //     onComplitio =>{
  //
  //     }
  //
  //   )
  //
  // }

}
