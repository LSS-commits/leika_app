import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { DataService } from 'src/app/services/data.service';
import { LuluFormatFunctions } from 'src/app/shared/lulu-functions';

@Component({
  selector: 'app-pending-leikode-transactions',
  templateUrl: './pending-leikode-transactions.component.html',
  styleUrls: ['./pending-leikode-transactions.component.scss']
})
export class PendingLeikodeTransactionsComponent implements OnInit {

  // object that from transactionservice gets all transactions with status pending

  // pendingleikodetransactions = [
  //   { // Pending CB paiement
  //     title: "Amazon Payements Europe S",
  //     amount: "129.99",
  //     amountnegative: true,
  //     submissionDate: "1656594363",
  //     accountRef: "AD1200012030200359100100",
  //     transactionType: "Card",
  //     transactionRef: "5514040338055704",
  //     targetAccount: "",
  //     transactionStatus: "Past",

  //     userValidationStatus: "Validated",

  //     bankValidationStatus: false,

  //     estimatedDate: "1656594361",

  //     category: "Incoming",

  //     rejectionReason: "Insufficient funds.",

  //     onlinestatus: true,
  //     usernote: ""
  //   },
  // ]

  
  sortedPendingTransactions: any;
  accounts: any;
  userData: any;
  userId: any;
  accountRef: any;
  constructor(private crudService: CrudService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getSortedPendingTransactions();
  }

  getSortedPendingTransactions(){
    // this.dataService.getLoggedUserData().subscribe({
      //   next: (res) => {
      //     this.userData = res;
      //     console.log('from service: ', this.userData._id);
      //           // put params to string because the request doesn't take the objectId that is referenced from the schema !!!
      //   this.userId = this.userData._id.toString();
      //     console.log('to string userId', this.userId);
          
      //   },
      //   error: (err) => {
      //     console.log(err);
      //   }
      // });
  
      if (sessionStorage.getItem('leikaUID') && sessionStorage.getItem('leikaULK')) {
              
        // TODO: check pb with getting user id from data service, is sometimes undefined
        this.userId = sessionStorage.getItem('leikaUID');
  
        this.crudService.getTypeRequest('/accounts/user/' + this.userId).subscribe({
          next: (res) => {
            this.accounts = res;
            // console.log(this.accounts);
  
            // LOOP ON ACCOUNTS
            for (let i = 0; i < this.accounts.length; i++) {
              this.accountRef = this.accounts[i]._id;
              this.accountRef.toString();
              // console.log(this.accountRef);
  
              // TODO: ACCOUNT REF AND STATUS SHOULD BE DYNAMIC + DEPEND ON ACCOUNT TYPE...
              // ONLY SHOWS TRANSACTIONS FROM CREDIT ACCOUNT BECAUSE NO TRANSACTIONS IN SAVINGS...
              this.crudService.getTypeRequest('/transactions/account/' + this.accountRef + '/status/Pending').subscribe({
                next: (res) => {
                  this.sortedPendingTransactions = res;
                  // console.log(this.sortedPendingTransactions);
  
                },
                error: (err) => {
                  console.log(err);
                }
              });
            }
          },
          error: (err) => {
            console.log(err);
          }
        });
  
      };
  
  }


  formatDate(date: any) {
    let formattedDate = LuluFormatFunctions.formatDate(date);
    return formattedDate;
  }

  formatAmount(num: any) {
    let formatednum = LuluFormatFunctions.formatAmount(num);
    return formatednum;
  }

}
