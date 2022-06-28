import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {
  AccountsRecord,
  Calendar,
  CreditCardPaymentOld,
  CreditCompanyType,
  PurchasedItemData
} from "../../../export-class/serverObjects";


// https://www.npmjs.com/package/angular-cc-library
import {CreditCardValidators} from "angular-cc-library";

// import { CreditCardDirectivesModule } from 'angular-cc-library';

@Component({
  selector: 'app-form-flex',
  templateUrl: './form-flex.component.html',
  styleUrls: ['./form-flex.component.scss'],
  encapsulation: ViewEncapsulation.None // must add this so mat field would notice scss
})
// font is added on myDemo\src\styles.scss > @font


export class FormFlexComponent implements OnInit {

  availableProductTypes: PurchasedItemData[] = [];
  product: PurchasedItemData | null = null;

  form!: UntypedFormGroup;
  phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    }
  );

  creditCardPaymentHolder: CreditCardPaymentOld = new class implements CreditCardPaymentOld {
    emvPayment: boolean = false;
    amountToCharge!: number;
    cardCCV!: string;
    cardHolderName!: string;
    cardNumber!: string;
    expirationMonth: number = 11;
    expirationYear: number = 23;
    creditCompany: CreditCompanyType = CreditCompanyType.UNKNOWN;
    firstCharge: number = 0;
    id!: number;
    invoice!: string;
    numOfPayments: number = 1;
    paymentDate!: Calendar;
    personalId!: string;
    systemId!: number;
  };

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit() {

    this.form = this.fb.group({
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
      phones: this.fb.array([]),
      username: ['', [<any>Validators.required]],
      creditCard: ['', [<any>Validators.required, <any>CreditCardValidators.validateCCNumber]],
      expirationMonth: ['', [<any>Validators.required]],
      expirationYear: ['', [<any>Validators.required]],
      personalId: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      ccv: ['', [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]],
      numOfPayments: ['', [<any>Validators.required, Validators.max(6)]],
      customerFirstName: ['', [Validators.required, Validators.pattern("^[^-\\s'][a-zA-Z0-9\u0590-\u05FF_'\\s-]+$")]],


      customerLastName: ['', [Validators.required, Validators.pattern("^[^-\\s'][a-zA-Z0-9\u0590-\u05FF_'\\s-]+$")]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [<any>Validators.required, Validators.pattern("^0\\d([\\d]{0,1})([-]{0,1})\\d{7}$")]],
      couponCode: [{value: '', disabled: true}],
      voucherCompanyId: ['', []],                       // TODO: make sure this is not needed
      // agreement: [false, Validators.requiredTrue],
      storeCredit: ['', []],

    });

  }


  // form: FormGroup;
  months!: string[];
  next10Years: number[] = [];

  payments: number[] = [];
  showCouponSection: boolean = true;

  tried_submitting: boolean = false;
  couponError!: string;

  isPark = false;
  isMobile: boolean = false;

  cardHolderName: string = 'cardHolder';
  personalId: string = 'personalId';
  cardNumber: string = 'cardNumber';
  expirationMonth: string = 'cardNumber';

  extraControls: Map<number, Map<number, UntypedFormControl[]>> = new Map<number, Map<number, UntypedFormControl[]>>();

  onResize(event: UIEvent) {
    window.addEventListener('resize', (event: UIEvent) => {
      const w = event.target as Window;
      this.isMobile = (w.innerWidth <= 600);
    });

    // this.isMobile = (event!.target!.innerWidth <= 600);   // old , does not work anymore

  }

  handleError(control: AbstractControl, emptyValidationMsg: string) {
    if (control.hasError("required")) {
      return emptyValidationMsg;
    } else {
      return "שדה לא תקין";
    }
  }

  getIsMobile() {
    return this.isMobile;
  }

  isErr2(field: AbstractControl): boolean {
    return field.invalid && (this.tried_submitting || !field.pristine) && this.getIsMobile();
  }

  getClass(field: AbstractControl): string {
    return (!field.pristine || this.tried_submitting) && field.invalid ? 'wrapper-filed-error' : 'wrapper-filed';
  }

  setCreditCardNumberEvent(value: string) {
    this.cardNumber = value;
  }

  selectedCompany!: number;

  setCouponService(target: EventTarget) {

    this.selectedCompany = +((<any>target).value);
    if (this.selectedCompany == 0) {
      this.form!.controls["couponCode"].disable();
    } else {
      this.form!.controls["couponCode"].enable();
    }
    console.log("Coupon Service selected", this.selectedCompany);
  }

  companies!: AccountsRecord[];

  getSupportedCouponCompanies(): AccountsRecord[] {
    // console.log("Companies: ", this.companies);
    return this.companies;
  }

  amountToCharge: number = 0;
  amountToChargeAfterDiscount: number = 0;

  isDiscount() {
// console.log('discount ',this.originalPrice != this.creditCardPaymentHolder.amountToCharge , this.couponError , this.originalPrice , this.creditCardPaymentHolder.amountToCharge)
    return this.couponError === undefined &&
      this.amountToCharge != undefined && this.amountToCharge > this.amountToChargeAfterDiscount;
  }

  onCreditChange(event: Event) {
    this.creditCardPaymentHolder.expirationMonth = Number((event.target as HTMLInputElement).value);
  }

  onCouponsClicked() {

  }

}
