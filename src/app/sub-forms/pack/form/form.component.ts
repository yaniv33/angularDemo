import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, UntypedFormArray, Validators} from '@angular/forms';
// import {MatDatepickerInputEvent} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

// import * as _moment from 'moment';
// // tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';
//
// const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'iw'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class FormComponent implements OnInit {

  loading = false;
  success = false;

  startDate = new Date(2010, 0, 1);
  minDate   = new Date(2009, 0, 1);
  maxDate   = new Date(2011, 0, 1);

  constructor(private fb: UntypedFormBuilder , private Adapter: DateAdapter<any>) { }

  myForm!: UntypedFormGroup;
  serializedDate!: Date;
  phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    }
  );

  myFilter = (d: Date | null): boolean => {
    const day = d?.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  ngOnInit() {

    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      // serializedDate: [(moment([2017, 0, 1]))],
      serializedDate: [''],
      age: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(65)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('[a-d]')
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]],
      homePhone: this.phone,
      phones: this.fb.array([])
    });
  }

  get phoneForms() {
    return this.myForm.get('phones') as UntypedFormArray;
  }

  addPhone() {
    this.phoneForms.push(this.phone);
  }

  deletePhone(i: number ) {
    this.phoneForms.removeAt(i);
  }

  get email() {
    return this.myForm.get('email');
  }

  get age() {
    return this.myForm.get('age');
  }

  get password() {
    return this.myForm.get('password');
  }
  get agree() {
    return this.myForm.get('agree');
  }

  addDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(type  +  ' ' + event.value);
    // this.events.push(`${type}: ${event.value}`);
  }

  hebrew() {
    this.Adapter.setLocale('he');
  }

  async submitHandler() {
    this.loading = true;
    const formValue = this.myForm.value;

    try {
      // await this.
    } catch (e) {
      console.error(e);
    }
    this.loading = false;
  }
}
