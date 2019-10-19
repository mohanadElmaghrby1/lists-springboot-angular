import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //we define a default value for mohannad
  username = 'mohannad'
  password=''
  invalidLogin = false
  //inject router and make it member variable
  constructor(private router : Router , private hardcodedAuth : HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  //component event
  handleLogin() {
    if(this.hardcodedAuth.authenticate(this.username , this.password)){
      this.invalidLogin=false;
      //navigate to welcome page if logged successful
      this.router.navigate(['welcome' , this.username]);
      console.log("logged in")
    }
    else
      this.invalidLogin=true
    console.log(this.username)
   }
}
