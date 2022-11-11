import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accountpicker',
  templateUrl: './accountpicker.component.html',
  styleUrls: ['./accountpicker.component.scss']
})
export class AccountpickerComponent implements OnInit {

  userData: any;
  accounts: any;
  userId: any;
  constructor(private crudService: CrudService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    // get user data from data service     
    // this.dataService.getLoggedUserData().subscribe(data => {
    //   this.userData = data;
    //   // console.log(this.userData._id);
    //   // put params to string because the request doesn't take the objectId that is referenced from the schema !!!
    //   // this.userId = this.userData._id.toString();

    // });

    // TODO: check pb with getting user id from data service, is sometimes undefined
    if (sessionStorage.getItem('leikaUID') && sessionStorage.getItem('leikaULK')) {
      this.userId = sessionStorage.getItem('leikaUID');

      this.crudService.getTypeRequest('/accounts/user/' + this.userId).subscribe({
        next: (res) => {
          this.accounts = res;
          // console.log(this.accounts);
        },
        error: (err) => {
          console.log(err);
        }
      });

    };

  }

}
