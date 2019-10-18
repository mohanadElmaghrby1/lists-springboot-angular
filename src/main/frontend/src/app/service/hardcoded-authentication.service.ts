import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  /**
   * return true if user is authenticated
   * @param username logged user
   * @param password logged password
   */
  authenticate( username , password):boolean {
    console.log("before" , this.isUserLoggedIn())
    if (username === 'mohannad' && password === '123') {
      sessionStorage.setItem("authenticated" , username);
      console.log("after" , this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn():boolean{
    let  user = sessionStorage.getItem("authenticated");
    return !(user === null)
  }
}
