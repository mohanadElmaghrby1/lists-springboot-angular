import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BasicAuthenticationService} from "../basic-authentication.service";

export class HelloWorldBean {
  constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient , private basicAuth:BasicAuthenticationService
  ) { }


  executeHelloWorldServiceWithPathVariable(name) {
    let basicAuthHeaderString = this.basicAuth.getAuthenticatedToken();

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      {headers}
    );
  }

}
