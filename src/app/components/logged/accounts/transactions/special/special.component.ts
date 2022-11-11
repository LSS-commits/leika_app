import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

  // check if there are pending leikode transactions
  pendingleikodetransactionscounter = 1;

  // check if there are incoming transactions
  incomingtransactionscounter = 2;

  // check how many have status unchecked // hope this will actualize if we modifiy the service data through its child

  // TODO DUPLICATED OBJECT, just go in db and calculate length
  uncheckedrejectedtransactions = [
    { // Rejected CB paiement
      title: "Amazon Payements Europe S",
      amount: "129.99",
      amountnegative: true,
      submissionDate: "1656594363",
      accountRef: "AD1200012030200359100100",
      transactionType: "Card",
      transactionRef: "5514040338055704",
      targetAccount: "",
      transactionStatus: "Rejected",

      userValidationStatus: "Validated",

      bankValidationStatus: false,

      estimatedDate: "1656594361",

      category: "",

      rejectionReason: "Insufficient funds.",

      onlinestatus: true,
      usernote: ""
    },
    { // Rejected CB paiement
      title: "Amazon Payements Europe S",
      amount: "129.99",
      amountnegative: true,
      submissionDate: "1656594363",
      accountRef: "AD1200012030200359100100",
      transactionType: "Card",
      transactionRef: "5514040338055704",
      targetAccount: "",
      transactionStatus: "Rejected",

      userValidationStatus: "Validated",

      bankValidationStatus: false,

      estimatedDate: "1656594361",

      category: "",

      rejectionReason: "Insufficient funds.",

      onlinestatus: true,
      usernote: ""
    },
    { // Rejected CB paiement
      title: "Amazon Payements Europe S",
      amount: "129.99",
      amountnegative: true,
      submissionDate: "1656594363",
      accountRef: "AD1200012030200359100100",
      transactionType: "Card",
      transactionRef: "5514040338055704",
      targetAccount: "",
      transactionStatus: "Rejected",

      userValidationStatus: "Validated",

      bankValidationStatus: false,

      estimatedDate: "1656594361",

      category: "",

      rejectionReason: "Insufficient funds.",

      onlinestatus: true,
      usernote: ""
    },
    { // Rejected CB paiement
      title: "Amazon Payements Europe S",
      amount: "129.99",
      amountnegative: true,
      submissionDate: "1656594363",
      accountRef: "AD1200012030200359100100",
      transactionType: "Card",
      transactionRef: "5514040338055704",
      targetAccount: "",
      transactionStatus: "Rejected",

      userValidationStatus: "Validated",

      bankValidationStatus: false,

      estimatedDate: "1656594361",

      category: "",

      rejectionReason: "Insufficient funds.",

      onlinestatus: true,
      usernote: ""
    },
  ]

  uncheckedrejectedtransactionscounter = this.uncheckedrejectedtransactions.length; 

  constructor() { }

  ngOnInit(): void {
  }

}
