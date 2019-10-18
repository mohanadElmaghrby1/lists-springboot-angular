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
  authenticate( username , password):boolean{
    if (username === 'mohannad' && password === '123')
      return true;
    return false;
  }
}
