import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loggedInState: boolean = false;
  loggedOutState: boolean = false;

  // for the loading animation
  @ViewChild("loader") loader!: ElementRef;

  constructor(private authGuardService: AuthGuardService) { }

  ngOnInit(): void {
    this.getLoggedState();
    this.hideLoader();    
  }

  // get logged state from login and logged components via auth guard service
  getLoggedState() {

    this.authGuardService.isLoggedIn.subscribe(res => {
      this.loggedInState = res;
      // console.log('logged in SERVICE : ' + res + ' COMPONENT : ' + this.loggedInState);
    });

    this.authGuardService.isLoggedOut.subscribe(res => {
      this.loggedOutState = res;
      // console.log('logged out SERVICE : ' + res + ' COMPONENT : ' + this.loggedOutState);
    });

  }


  // TEST LOADING ANIMATION

  // loader goes under all other components after page is fully loaded
  hideLoader() {

    window.addEventListener("load", function () { this.setTimeout(hideLoader, 2000) });

    const hideLoader = () => {
      this.loader.nativeElement.style.zIndex = "-999";
    }

  }
  // END TEST LOADING ANIMATION



}
