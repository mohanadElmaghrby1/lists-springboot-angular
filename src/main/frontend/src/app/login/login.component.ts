import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

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
  constructor(private router : Router) { }

  ngOnInit() {
  }

  //component event
  handleLogin() {
    if(this.username==="mohannad" && this.password==='123'){
      this.invalidLogin=false;
      //navigate to welcome page if logged successful
      this.router.navigate(['welcome']);
    }
    else
      this.invalidLogin=true
    console.log(this.username)
   }
}
