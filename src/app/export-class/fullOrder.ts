// import {Item} from './item';
import {Customer} from './customer';
import {Item} from './PosObjects';
// import {
//   CashPaymentDetails,
//   CreditCardPaymentOld, CreditPointsPayment,
//   DirectDebitWithLimitedDetails
// } from "../../../../common/serverObjects";

export interface UIFullOrder {
  // cashPayment: CashPaymentDetails;
  // creditPayments: CreditCardPaymentOld[];
  // directDebitPayments: DirectDebitWithLimitedDetails[];
  // virtualPointsPayments: CreditPointsPayment[];


  id: number;
  sub_total: number;
  total: number;
  amount_paid: number;
  is_draft: boolean;
  invoice_number: number;
  reference_number: number;
  discount_value: number;
  created_on: Date;
  note: string;

  admin_id: string;
  customer_id: number;
  paying_user_id: number;
  address_id: number;
  store_id: number;
  current_status_id: number;

  items: Item[];
  taxes: any[];
  total_tax: number;

  customer: Customer;
  created_by: string;
  address: string;
  store: string;
  current_status: string;
  time_line: string;

}


