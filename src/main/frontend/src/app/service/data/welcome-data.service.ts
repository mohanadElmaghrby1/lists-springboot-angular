import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class HelloWorldBean {
  constructor(public message:string) {
  }


}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient : HttpClient) { }

  getWelcomeMessage(){

    return this.httpClient.get('http://localhost:8080/hello-world-bean');
  }

  getWelcomeMessageWithPathVariable(name){
    let basicAuthHeader = this.createBasicAuthHeader();
    let headers = new HttpHeaders({
      Authorization : basicAuthHeader
    })

    return this.httpClient.get(`http://localhost:8080/hello-world-bean/${name}` , {headers});
  }

  createBasicAuthHeader():string{
    let username = 'mohannad'
    let password= '123'
    let basicHeader = 'Basic '+window.btoa(username+':'+password)
    return basicHeader;
  }
}
