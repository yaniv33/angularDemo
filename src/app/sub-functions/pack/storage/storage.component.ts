import { Component, OnInit } from '@angular/core';
import {Hero} from "../../../export-class/hero";
// import {AsyncLocalStorage} from "angular-async-local-storage";
import {CookieService} from "ngx-cookie-service";

import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  cnt = 0;
  hero: Hero = {
    id: this.cnt,
    name: 'Windstorm'
  };

  storageName : string = 'storage';
  cookieName : string = 'cookie';
  sessionName : string = 'session';

  gotFromStorage! : string;



  constructor(  private localStorage: LocalStorage,
                private Cookie: CookieService) { }

  ngOnInit() {

    window.sessionStorage.setItem("animals", "cat");
  }

  setLocalStorage(): void {
    this.localStorage.setItem(this.storageName, this.getHero()).subscribe(() => {
      console.log('item set ' );
    });
  }

  readLocalStorage(): void {
    this.localStorage.getItem(this.storageName).subscribe(hero => { this.display(hero  as Hero , 'storage');});
  }

  clearLocalStorage(): void {
    this.localStorage.clear().subscribe((event) => {
      this.gotFromStorage = 'locale storage cleared ' + event;
    }, err => {
      this.gotFromStorage = 'locale storage cleared err' + err;});
  }

  writeCookie(): void {
    this.Cookie.set(this.cookieName, JSON.stringify(this.getHero()));
  }

  readCookie(): void {
    const cookieVal = this.Cookie.get(this.cookieName);
    this.display(cookieVal ? JSON.parse(cookieVal) : null , 'cookie');
  }

  clearCookie():void{
    var cookies = document.cookie.split(";");
console.log(cookies);
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  setSessionStorage(): void {
    window.sessionStorage.setItem(this.sessionName, JSON.stringify(this.getHero()));
  }

  readSessionStorage(): void {
    this.display(JSON.parse( window.sessionStorage.getItem(this.sessionName)  || '{}'), 'session');
  }

  clearSessionStorage(): void {
    window.sessionStorage.clear();
  }

  getHero() : Hero{
    this.hero.id ++;
    return this.hero;
  }

  display(hero: Hero , origin){
    if (hero && hero != null) {
      this.gotFromStorage = origin + ' ' + JSON.stringify(hero);
    } else {
      this.gotFromStorage = 'No data in ' + origin;
    }
  }

}
