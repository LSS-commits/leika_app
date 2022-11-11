import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { DataService } from 'src/app/services/data.service';
import { LuluFormatFunctions } from 'src/app/shared/lulu-functions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  accountCards: any;
  accounts: any;
  userData: any;
  userId: any;
  accountRef: any;
  constructor(private crudService: CrudService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(){
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
            this.crudService.getTypeRequest('/cards/account/' + this.accountRef).subscribe({
              next: (res) => {
                this.accountCards = res;
                // console.log(this.accountCards);

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

}
