import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {CreditCardValidators} from 'angular-cc-library';
import * as moment from 'moment';
import {CreditCardPaymentOld, CreditCompanyType} from "../../../../export-class/serverObjects";
import {MatDialog} from "@angular/material/dialog";
// import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-test-credit-layout',
  templateUrl: './test-credit-layout.component.html',
  styleUrls: ['./test-credit-layout.component.scss']
})
export class TestCreditLayoutComponent implements OnInit {

  @Input()
  showButtons: boolean = true;
  @Input()
  tried_submitting: boolean = false;
  @Output()
  onSubmit: EventEmitter<CreditCardPaymentOld> = new EventEmitter(false);
  @Output()
  onCancel = new EventEmitter();

  form: UntypedFormGroup;
  months: string[];
  next10Years: number[] = [];

  @Input()
  creditCardPaymentHolder: CreditCardPaymentOld = new class implements CreditCardPaymentOld {
    amountToCharge!: number;
    paymentDate = new Date();
    cardCCV: string = '';
    cardHolderName: string = '';
    cardNumber: string = '';
    expirationMonth!: number;
    expirationYear!: number;
    creditCompany: CreditCompanyType = CreditCompanyType.UNKNOWN;
    firstCharge: number = 0;
    id!: number;
    invoice!: string;
    numOfPayments: number = 1;
    personalId!: string;
    systemId!: number;
    emvPayment: boolean = false;
  };

  ValidatorsUtils = {
    firstName: '^[^-\\s\'][a-zA-Z0-9\u0590-\u05FF_\'\\s-]+$',
    lastName: '^[^-\\s\'][a-zA-Z0-9\u0590-\u05FF_\'\\s-]+$',
    phone: '(\\+\\d{1,3}[- ]?)?\\d{10}$',
    personalID: '^[0-9]{7,10}$',
    email: '^[_A-Za-z0-9-\\\\+]+(\\\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
    creditCard: '^[0-9]{13,17}$'
    ,
  };
  compareFn: (( f1: any, f2: any ) => boolean) | null = this.compareByValue;

  compareByValue( f1: any, f2: any ) {
    return f1 && f2 && f1.name === f2.name;
  }

public header: string = 'Edit row';
public lineField:Array<number> = [1,2,3,4];



  constructor( public _fb: UntypedFormBuilder,
               public messageDialog: MatDialog ) {
    this.form = this._fb.group({
      username: ['', [<any> Validators.required, Validators.pattern(this.ValidatorsUtils.firstName)]],
      creditCard: ['', [<any> Validators.required, <any> CreditCardValidators.validateCCNumber]],
      expirationMonth: ['', [<any> Validators.required]],
      expirationYear: ['', [<any> Validators.required]],
      personalId: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
      ccv: ['', [<any> Validators.required, <any> Validators.minLength(3), <any> Validators.maxLength(4)]],
      // amountToCharge: ['', [<any>Validators.required]],
      // numOfPayments: ['', [<any>Validators.required]],
    });

    this.months = moment.monthsShort();
    for (let i = 0; i < 10; i++) {
      this.next10Years.push((new Date().getFullYear() + i) % 100);
    }
  }

  handleError( control: AbstractControl, emptyValidationMsg: string ) {
    if (control.hasError('required')) {
      return emptyValidationMsg;
    } else {
      return 'שדה לא תקין';
    }
  }

  ngOnInit() {

  }

  onAddCreditCardPressed() {
    this.tried_submitting = true;
    if (this.isInvalid()) {
      return;
    }
    this.onSubmit.emit(this.creditCardPaymentHolder);
  }

  onCancelPressed() {
    this.onCancel.emit();
  }

  setCreditCardNumberEvent( value: string ) {
    this.creditCardPaymentHolder.cardNumber = value;
  }

  isInvalid() {
    console.log('checking form for invalidity', this.form);
    return !this.form.valid;
  }
}

// import { Directive, HostListener, ElementRef } from '@angular/core';
//
// @Directive({
//   selector: '[credit-card]'
// })
//
// export class CreditCardPaddingDigitsDirective {
//
//   @HostListener('input', ['$event'])
//   onKeyDown(event: KeyboardEvent) {
//     const input = event.target as HTMLInputElement;
//
//     let trimmed = input.value.replace(/\s+/g, '');
//     if (trimmed.length > 16) {
//       trimmed = trimmed.substr(0, 16);
//     }
//
//     let numbers = [];
//     for (let i = 0; i < trimmed.length; i += 4) {
//       numbers.push(trimmed.substr(i, 4));
//     }
//
//     input.value = numbers.join(' ');
//
//   }
// }
