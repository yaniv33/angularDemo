import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Hero} from "../../../export-class/hero";


@Injectable({
  providedIn: 'root'
})
export class BindServiceService {

  public nString = new Subject<any>();
  public nHero = new Subject<Hero>();

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  sendByEvent() {
    this.change.emit(false);
  }

  sendMessage(message: string) {
    this.nString.next({ text: message });
  }

  sendHero(hero: Hero) {
    this.nHero.next(hero );
  }

  clearMassege() {
    this.nString.next(true);
  }

  getMessage(): Observable<any> {
    return this.nString.asObservable();
  }

  getHero(): Observable<Hero> {
    return this.nHero.asObservable();
  }

}
