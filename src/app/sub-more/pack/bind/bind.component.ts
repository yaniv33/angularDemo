import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
// import {any} from 'codelyzer/util/function';
import {BindServiceService} from './bind-service.service';
import {BindInnerComponent} from './bind-inner/bind-inner.component';
import {mClass} from "./myClass";

@Component({
  selector: 'app-button',
  templateUrl: './bind.component.html'
  // ,styleUrls: ['../../styles.scss']
})
export class BindComponent implements OnInit {

  @ViewChild(BindInnerComponent, {static: false}) child!: BindInnerComponent;    // refering to child component

  @ViewChild('input', {static: false}) input;                 // refering to html tag marked with #[name]

  constructor( private Bservice: BindServiceService ) { }

  subscription!: Subscription;
  prop1 = false;
  myString = 'hello to you';

  mclass :mClass = {id : 1 , name : this.myString};

  alertMe(val) {
    // console.log(this.input.value);
    alert(val);
  }

  yell(e) {
    alert('got Event from child');
  }

  passDataByService() {
    this.Bservice.sendByEvent();
  }

  passDirect() {
    this.child.notifyMe(false);
  }

  ngOnInit() {
    this.subscription = this.Bservice.getMessage().subscribe(
      message => {
        alert(message.text);
      });

    this.subscription = this.Bservice.getHero().subscribe(
      (hero: mClass) => {
        let json = JSON.stringify(hero);
        let name = JSON.parse(json).name;
        alert( json +'\n'+ name);
      });
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}

