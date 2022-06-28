import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PrintInnerComponent} from './print-inner/print-inner.component';
// import {TdLoadingService} from '@covalent/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../../export-class/customer";
import {Item} from "../../../export-class/PosObjects";
import {UIFullOrder} from "../../../export-class/fullOrder";

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html'
})
export class PrintComponent implements OnInit {

  @ViewChild('printTickets', {static: false}) printTickets!: PrintInnerComponent;

  inProcess = false;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  printComponent(cmpName) {
    const printContents = document.getElementById(cmpName)!.innerHTML;
    const wnd = window.open('', '_blank', 'fullscreen=yes');
    if (wnd !== null) {
      wnd.document.write(printContents);

      wnd.print();
      wnd.close();
    }

    // const originalContents = document.body.innerHTML;

    // document.body.innerHTML = printContents;

    // setTimeout(() => {
    // document.body.innerHTML = printContents;
    // window.print();
    // console.log('got to print2');
    // document.body.innerHTML = originalContents;
    // console.log('got to print');





    // });
  }



  async onCheckoutPressed() {
    // this.tdLoadingService.register('TransactionProcess');
    this.inProcess = true;

    const strings = ['234234234', '234234234', '23423423d'];

    const mcustomer: Customer = {
      id: 6,
      firstName: 'ttt',
      lastName: 'ttt',
      email: 'ttt',
      phone: 'ttt',
  };

    const mitem: Item[] = [{
                              name: 'werwer',
                              quantity: 5,
                              stock_id: 5,
                              product_id: 5,
                              discount: 5,
                              unit_price: 5,
                              stock_adjust: true

                            }, {
                              name: 'werwer',
                                quantity: 5,
                                stock_id: 5,
                                product_id: 5,
                                discount: 5,
                                unit_price: 5,
                                stock_adjust: true

                            }];

    const cart: UIFullOrder = {
    id: 5,
    sub_total: 5,
    total: 5,
    amount_paid: 5,
    is_draft: true,
    invoice_number: 6,
    reference_number: 7,
    discount_value: 8,
    created_on: new Date(),
    note: 'ttt',

    admin_id: 'yaniv',
    customer_id: 7,
    paying_user_id: 8,
    address_id: 8,
    store_id: 1,
    current_status_id: 2,

    total_tax: 23,
    created_by: 'ert',
    address: 'ert',
    store: 'ert',
    current_status: 'ert',
    time_line: 'ert',

      items: mitem,
      taxes: strings,
      customer: mcustomer
    };

    console.log(strings);
    this.printTickets.accountingDocument = 5; // paymentTransaction
    this.printTickets.cart = cart;
    this.printTickets.tickets = strings;
    this.printTickets.directPrint();
    // this._cart.previousCart = JSON.parse(JSON.stringify(cart));
    // this._cart.newCart();
    // this._router.navigate(['pos/billing']);


    // this.print.ticketsVal = this.productList;
    // this.print.directPrint();

    // const cart = this._cart.cart;
    // cart.is_draft = false;
    // let paymentTransaction;
// try {
//   paymentTransaction = await this.saveOrder(cart);
// } catch (e) {
//   console.error('***XXX***', e);
//   // this._messageDialogService.openError(e);
//   throw e;
// } finally {
//   this.tdLoadingService.resolve('TransactionProcess');
//   this.inProcess = false;
// }
// console.log(paymentTransaction);
//     cart.id = paymentTransaction.id;

    // cart.invoice_number = +paymentTransaction.counter;
    // cart.created_on = new Date();

    // try {
    //   strings = await this._tickets.getGeneratedBarcodesByTransaction(paymentTransaction).toPromise().then();
    // } catch (e) {
    //   this._messageDialogService.openError(e);
    //   cart.note = 'בעיה בהפקת הכרטיסים';
    // } finally {
    //   this.tdLoadingService.resolve('TransactionProcess');
    //   this.inProcess = false;
    // }
    // this.print.cart = cart;
  }

}
