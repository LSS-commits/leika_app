import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // booleans for logged state
  loggedInState: boolean = false;
  loggedOutState: boolean = false;

  // to check user email update user data in database (new leikode)
  user: any;

  // to store data in session storage and send to service
  userId: any;
  userLeikode: any;

  // error message
  errorState: boolean = false;
  errorMessage: any;

  // login form
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  });

  // toggle password = get element by id
  @ViewChild("togglePassword") togglePassword!: ElementRef;

  passwordShow: boolean = false;

  constructor(
    private crudService: CrudService,
    private authGuardService: AuthGuardService
  ) { }

  ngOnInit(): void {

    // TEST receive loggedInState et loggedOutState from auth guard service = OK
    // this.authGuardService.getLoggedIn().subscribe(res => {
    //   console.log('logged in: ' + res); 
    // });

    // this.authGuardService.getLoggedOut().subscribe(res => {
    //   console.log('logged out: ' + res);  
    // });

  }

  onSubmit() {


    // empty form
    if (this.loginForm.invalid) {

      this.errorState = true;
      this.errorMessage = "Please indicate valid email and password";

      this.loggedOutState = true;
      this.loggedInState = false;

      // send states to auth guard service so that it can send them to main component
      this.authGuardService.setLoggedOutState(this.loggedOutState);
      this.authGuardService.setLoggedInState(this.loggedInState);

      return;
    }

    // console.log("Login form data: ", this.loginForm.value);

    // send email and password to backend for check, if ok, generate token and put in cookie (for logged state protection) 
    this.crudService.postTypeRequest('/auth/login', this.loginForm.value).subscribe({
      next: (res) => {
        // res from backend = user data + generated_leikode
        this.user = Object.values(res)[0];
        // console.log(this.user);

        // remove previous error messages if login is validated
        this.errorState = false;

        // !!! THIS LOGS THE OLD LEIKODE !!!
        // console.log('new leikode: ' + this.user.leikode);

        // get new leikode
        this.userLeikode = Object.values(res)[1];
        // console.log(this.userLeikode);

        // get user id
        this.userId = this.user._id;
        // console.log(this.userId);


        // STORE USER ID AND NEW LEIKODE IN SESSION STORAGE
        sessionStorage.setItem('leikaUID', this.userId);
        sessionStorage.setItem('leikaULK', this.userLeikode);

        this.loggedInState = true;
        this.loggedOutState = false;
      
      // send states to auth guard service so that it can send them to main component
      this.authGuardService.setLoggedInState(this.loggedInState);
      this.authGuardService.setLoggedOutState(this.loggedOutState);

      // TODO: get rid of this log
      // console.log('user logged in : ' + this.user.username);
      
        // reset login form
        this.loginForm.reset();

        // page needs to be reloaded to give time to refresh data state after login (reload with css animation)
        window.location.reload();
      },
      error: (err) => {
        this.errorState = true;
        this.errorMessage = err.error;

        this.loggedOutState = true;
        this.loggedInState = false;
  
        // send states to auth guard service so that it can send them to main component
        this.authGuardService.setLoggedOutState(this.loggedOutState);
        this.authGuardService.setLoggedInState(this.loggedInState);
        }
    });

  };


  // toggle password
  togglePW() {
    if (this.togglePassword?.nativeElement.type === "password") {
      this.togglePassword.nativeElement.type = "text";
      this.passwordShow = true;
    } else {
      this.togglePassword.nativeElement.type = "password";
      this.passwordShow = false;
    }
  };

}
