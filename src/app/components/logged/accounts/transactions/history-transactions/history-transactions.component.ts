import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { DataService } from 'src/app/services/data.service';
import { LuluFormatFunctions } from 'src/app/shared/lulu-functions';

@Component({
  selector: 'app-history-transactions',
  templateUrl: './history-transactions.component.html',
  styleUrls: ['./history-transactions.component.scss']
})
export class HistoryTransactionsComponent implements OnInit {

  sortedHistoryTransactions: any;
  //TODO erase
  sortedHistoryTransactions2: any;
  accounts: any;
  userData: any;
  userId: any;
  accountRef: any;
  constructor(private crudService: CrudService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getSortedHistoryTransactions();
  }

  getSortedHistoryTransactions() {
    // this.dataService.getLoggedUserData().subscribe(data => {
    //   this.userData = data;
    //   // console.log(this.userData._id);
    //   // put params to string because the request doesn't take the objectId that is referenced from the schema !!!
    //   // this.userId = this.userData._id.toString();

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
            this.crudService.getTypeRequest('/transactions/account/' + this.accountRef + '/status/Past').subscribe({
              next: (res) => {
                this.sortedHistoryTransactions = res;
                // TODO erase
                this.sortedHistoryTransactions2 = this.sortedHistoryTransactions;
                // console.log(this.sortedHistoryTransactions);

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
