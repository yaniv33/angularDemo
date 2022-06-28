import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {MatDialog} from '@angular/material';
// import {BasicUser, CreditCardPaymentOld, DirectDebitWithLimitedDetails} from '../../../pos/PosObjects';
import {CreditCardManualFillingViewComponent} from '../credit-card-manual-filling-view/credit-card-manual-filling-view.component';
import {
  BasicUser,
  CreditCardPaymentOld,
  DirectDebitWithLimitedDetails
} from "../../../../export-class/serverObjects";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {

  constructor(
    /*private _customerService: CustomerService,
              private _directDebitService: DirectDebitService,
              private _messageDialog: MessageDialogService,*/
              private dialog: MatDialog) {
  }

  @Input()
  selectedUser!: BasicUser;

  @Input()
  showHeaders: boolean = true;


  userDirectDebitCardsList: DirectDebitWithLimitedDetails[] = [];

  @Output()
  onSubmit: EventEmitter<DirectDebitWithLimitedDetails> = new EventEmitter();
  @Output()
  onNewDebitRequest: EventEmitter<CreditCardPaymentOld> = new EventEmitter();

  async ngOnInit() {
    // if (this.selectedUser) {
    //   await this.initUserDebitCardsList();
    // }
  }

  // async initUserDebitCardsList() {
  //   let self = this;
  //   this._directDebitService.getUserDirectDebitCards(this.selectedUser.personalData.id)
  //     .subscribe((directDebitsCardsList) => {
  //         self.userDirectDebitCardsList = <DirectDebitWithLimitedDetails[]><unknown>directDebitsCardsList;
  //         if (self.userDirectDebitCardsList && self.userDirectDebitCardsList.length > 0) {
  //           self.onDirectDebitSelected(self.userDirectDebitCardsList[self.userDirectDebitCardsList.length - 1]);
  //         }
  //       },
  //       error => {
  //         console.error("Failed to pull user direct debit cards, errorMessage: " + error);
  //         this._messageDialog.openMessageDialog(MessageType.ERROR, "לא ניתן להציג את כרטיסי האשראי של המשתמש", '');
  //       });
  // }


  // selectedCreditCard: DirectDebitWithLimitedDetails;

  // onDirectDebitSelected(directDebitCard: DirectDebitWithLimitedDetails) {
  //   this.selectedCreditCard = directDebitCard;
  //   directDebitCard.numOfPayments = 1;
  //   directDebitCard.userId = this.selectedUser.personalData.id;
  //   this.onSubmit.emit(directDebitCard);
  // }

  onAddCreditCardPressed() {
    let matDialogRef = this.dialog.open(CreditCardManualFillingViewComponent);
    if (this.onNewDebitRequest) {

      matDialogRef.componentInstance.onSubmit.subscribe(value => {
        this.onNewDebitRequest.emit(value);
        matDialogRef.close();
      });
    }
    matDialogRef.componentInstance.onCancel.subscribe(() => {
      matDialogRef.close();
    });

  }

  // getSelected() {
  //   return this.selectedCreditCard;
  // }

  // getCreditCardCompany(directDebit: DirectDebitWithLimitedDetails): string {
  //   let creditCompanyType = EnumUtils.getEnumValue(directDebit.creditCardCompany, CreditCompanyType);
  //   switch (creditCompanyType) {
  //     case CreditCompanyType.UNKNOWN:
  //       return "לא ידוע";
  //     case CreditCompanyType.AMERICAN_EXPRESS:
  //       return "אמריקן אקספרס";
  //     case CreditCompanyType.DINERS:
  //       return "דיינרס";
  //     case CreditCompanyType.ISRACARD:
  //       return "ישראכארט";
  //     case CreditCompanyType.VISA:
  //       return "ויזה";
  //     case CreditCompanyType.MASTERCARD:
  //       return "מאסטר קארד";
  //   }
  // }


  // onAddDirectDebit(newDirectDebit: DirectDebitWithLimitedDetails) {
  //   this.userDirectDebitCardsList.push(newDirectDebit);
  //   this.initUserDebitCardsList();
  // }

  // async onDirectDebitRemoveRequest(debitDetails: DirectDebitWithLimitedDetails) {
  //   console.log('trying to remove card');
  //   await this._directDebitService.removeCreditCardDetails(debitDetails).toPromise();
  //   this.userDirectDebitCardsList.splice(this.userDirectDebitCardsList.indexOf(debitDetails),1);
  // }
}
