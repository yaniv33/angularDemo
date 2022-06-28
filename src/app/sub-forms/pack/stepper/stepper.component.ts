import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {MatHorizontalStepper} from "@angular/material/stepper";
/*
import {GraphInnerComponent} from '../../../sub-gui/pack/graph/graph-inner/graph-inner.component';
import {MatHorizontalStepper} from '@angular/material';
import sdk from '@stackblitz/sdk';
*/
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit, AfterViewInit  {

  formGroup1!: UntypedFormGroup;
  formGroup2!: UntypedFormGroup;
  isOptional = true;
  vmPlaceholder: any;

  // @ViewChild('myStep', {static: false}) myStep;
  // @ViewChild('myStep', {static: false}) myStep: MatHorizontalStepper;
  @ViewChild('myStep', {static: false}) myStep!: MatHorizontalStepper;

  constructor(private form: UntypedFormBuilder) { }

  ngOnInit() {
    this.formGroup1 = this.form.group({firstCtrl:  ['', Validators.required]});
    this.formGroup2 = this.form.group({secondCtrl: ['', Validators.required]});
  }

  ngAfterViewInit() {
    // sdk.embedProjectId('myDiv', 'angular-7-node').then(vm => {
    //   this.vmPlaceholder = vm;
    // });
  }

}
