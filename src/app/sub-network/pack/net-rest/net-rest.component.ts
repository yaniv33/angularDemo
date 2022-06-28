import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from './interface';
import {NetRestService} from './net-rest.service';
import {Eventy, Hero, System} from '../../../export-class/hero';
// import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-net-rest',
  templateUrl: './net-rest.component.html'
})

export class NetRestComponent implements OnInit {

  myString = '';
  myString1 = '';
  myString2 = '';

  person!: Person;
  hero!: Hero;
  heros!: Hero[];

  system!: System;

  msg : string | undefined= 'net-rest works!'

  constructor(private netrest: NetRestService ) {
    netrest.dataBehavior$.asObservable().subscribe((value : any) =>{
      this.msg = value;
      }
    )
  }

  ngOnInit() {
  }


  getById() {

    this.hero =  {
      id: 11,
      name: 'hh'
    };

// this.http.post(`/springDemo/rest/userManagement/getHeros`, hero, {})
    this.netrest.getHerosbyid(this.hero)
      .subscribe( {
          next: (value) => {
            console.log(value);
            this.hero = value;
            this.myString = 'GOT OK1: Hero id = ' + this.hero.id;

          },                                          // nextHandler
          complete: () => { console.log('complete')}, // completeHandler
          error: (error) => {
              console.error('Problem Controller: ' + error.message);
              this.myString = 'GOT Err: '          + error.message;
          },                                          // errorHandler


      });
  }

  sendAndReceiveObject() {

    this.person =  {
      systemID: 3,
      name: 'Black',
      dbName: 'Black',
      dbUser: 'Black',
      dbPass: 'Black',
      dbPort: 'Black',
      dbServer: 'Black',
      identifier: 'Black',
      systemType: 'Black',
      sourcekey: 'Black',
      pin: 'Black',
      result: 'Black',
      commission: 1,
      memberPrice: 1
    };

    // this.http.post(`/springDemo/rest/userManagement/getVenueInfoTest`, this.Venue, {})
    this.netrest.sendAndReceiveObject(this.person)
      .subscribe( {
        next: (value) => {
              console.log(value);
              this.person = value;
              this.myString = 'GOT OK1: ' + this.person.systemID;
              },                                          // nextHandler
              error: (error) => {
                console.error('Problem Controller: ' + error.message);
                this.myString = 'GOT Err: '         + error.message;
              },                                          // errorHandler
              complete: () => { console.log('complete')}, // completeHandler


      });
      // .subscribe(value => {
      //         console.log(value);
      //         this.person = value;
      //         this.myString = 'GOT OK1: ' + this.person.systemID;
      //
      // }, error => {
      //         console.error('Problem Controller: ' + error.message);
      //         this.myString = 'GOT Err: ' + error.message;
      //   });
    }

  HeroAll() {

    this.netrest.getHerosAll()
      .subscribe(value => {
        console.log(value);
        this.heros = value;
        this.myString1 = 'GOT OK1: ' + this.heros[0].id;

      }, error => {
        console.error('Problem Controller: ' + error.message);
        this.myString1 = 'GOT Err: ' + error.message;
      });
  }

  HeroById() {

    this.netrest.getHeroByID(11)
      .subscribe(value => {
        console.log(value);
        this.hero = value;
        this.myString1 = 'GOT OK1: ' + this.hero.id;

      }, error => {
        console.error('Problem Controller: ' + error.message);
        this.myString1 = 'GOT Err: ' + error.message;
      });
  }

  HeroByName() {

    this.netrest.getHeroByName('yahh')
      .subscribe(value => {
        console.log(value);
        this.hero = value;
        this.myString1 = 'GOT OK1: ' + this.hero.id;

      }, error => {
        console.error('Problem Controller: ' + error.message);
        this.myString1 = 'GOT Err: ' + error.message;
      });
  }

  sendOtotMobi() {

    this.netrest.sendOtotMobi()
      .subscribe((value: System) => {
        console.log(value);
        this.myString2 = value.entry_Time.toString();
      }, error => {
        this.myString2 = 'GOT Err: ' + error.message;
      });

  }

  sendOtotMobiGetSingleEvent() {

    this.netrest.sendOtotMobiGetSingleEvent()
      .subscribe((value: Eventy) => {
        console.log(value);
        this.myString2 = value.start_Time.toString();
      }, error => {
        this.myString2 = 'GOT Err: ' + error.message;
      });

  }

  sendOtotMobiLocal() {

    this.netrest.sendOtotMobiLocal()
      .subscribe((value) => {
        console.log(value);
        this.myString2 = (value as System)?.entry_Time?.toString();
      }, error => {
        this.myString2 = 'GOT Err: ' + error.message;
      });

    // OLD - .subscribe((value : System) => { ,
    // NEW (value as System)?

  }

  sendOtotMobiLocal2() {

    this.netrest.sendOtotMobiLocal2()
      .subscribe(value => {
        console.log(value);
      }, error => {
        console.log('Problem Controller: ' );
      });

  }
  sendOtotMobi2() {
  }

  getAllHeros() {

    this.netrest.getAllHeros()
      .subscribe(value => {
        this.heros = value;
        this.myString = 'GOT OK3: ' + this.heros[0].id;
      }, error => {
        console.error('Problem Controller: ' + error);
        this.myString = 'GOT Err3: ' + error;
      });
  }
}
