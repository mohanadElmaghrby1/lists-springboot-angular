import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  LOGGED_USER='authenticated';

  constructor() { }

  /**
   * return true if user is authenticated
   * @param username logged user
   * @param password logged password
   */
  authenticate( username , password):boolean {
    console.log("before" , this.isUserLoggedIn())
    if (username === 'mohannad' && password === '123') {
      sessionStorage.setItem(this.LOGGED_USER , username);
      console.log("after" , this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn():boolean{
    let  user = sessionStorage.getItem(this.LOGGED_USER);
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem(this.LOGGED_USER);
  }
}
