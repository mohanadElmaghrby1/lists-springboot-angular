import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  //component event
  handleLogin() {
    if(this.username==="mohannad" && this.password==='123')
      this.invalidLogin=false;
    else
      this.invalidLogin=true
    console.log(this.username)
   }
}
