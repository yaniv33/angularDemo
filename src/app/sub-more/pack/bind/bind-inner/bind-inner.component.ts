import {Component, OnInit, Input,  Output, EventEmitter} from '@angular/core';
// import {Subject} from 'rxjs';
import {BindServiceService} from '../bind-service.service';
// import {AsyncLocalStorage} from 'angular-async-local-storage';
// import { LocalStorage } from '@ngx-pwa/local-storage';
// import {CookieService} from 'ngx-cookie-service';
// import {Hero} from "../../../../sub-network/pack/heroes/services/hero";
import {mClass} from "../myClass";


@Component({
  selector: 'app-button-inner',
  templateUrl: './bind-inner.component.html',
  styleUrls: ['./bind-inner.component.css']
})
export class BindInnerComponent implements OnInit {

  @Input() myStringInner!: string;          // get string as input
  @Input() mclass!: mClass;                // get class
  @Input()
  set setProp(p: boolean) {               // get function call as input
     this.mprop =p;
    console.log('Hello from parent ' + p);
  }
  @Output() OnYell = new EventEmitter();          // set emmiter to run on parent

  // cnt = 0;
  mprop : boolean = false;

  notifyMe(p: boolean) {

    alert('Hello from parent ' + p);
    // console.log('hello');
  }

  fireYellEvent(e) {
    this.OnYell.emit(e);
  }

  constructor( private Bservice: BindServiceService) {

    // this.OnYellBack.pipe(function(source) {
    //   console.log('HELLO');
    // });
  }

  sendMessage(): void {
    this.Bservice.sendMessage('Message from Home Component to App Component!');
  }

  sendHero(): void {
    // let hero: Hero;
    // hero = {
    //   id: 1,
    //   name: 'Windstorm'
    // };

    this.Bservice.sendHero(this.mclass);
  }

  clearMessage(): void {
    this.Bservice.clearMassege();
  }


    ngOnInit() {
    this.Bservice.change.subscribe(
      event => {
        alert('got by service :' + event);
        console.log('hello by service ' + event);
    });

  }
  //
  // setLocalStorage(): void {
  //   this.cnt = this.cnt + 1;
  //   const hero: Hero = {
  //     id: this.cnt,
  //     name: 'Windstorm'
  //   };
  //   this.localStorage.setItem('hero', hero).subscribe(() => {
  //     console.log('item set ' );
  //   }, () => {});
  // }
  //
  // readLocalStorage(): void {
  //   this.localStorage.getItem('hero').subscribe(hero => {
  //     if (hero && hero != null) {
  //       const mhero: Hero = hero;
  //       console.log('got ' + mhero.id + ' ' + mhero.name);
  //     } else {
  //       console.log('Generating new cart!');
  //     }
  //   });
  // }
  // writeCookie(): void {
  //   this.Cookie.set('cokie-name', '12345');
  // }
  //
  // readCookie(): void {
  //
  //   const cookieVal = this.Cookie.get('cokie-name');
  //   console.log(cookieVal);
  // }

}
