import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  public nString = new BehaviorSubject<string[]>([]);
  public mString = new Subject<string>();

  constructor() { }

  getUsers() : Observable<string[]>{
    let ss : string[] =  ['Yossi', 'David','Shimi'];
    this.nString.next(ss);
    return this.nString.asObservable();
  }

  getOutPut(): Observable<string>{
    return this.mString.asObservable();
  }

  setToOutput(data : string){
    console.log('my data', data);
    this.mString.next(data);
  }


}
