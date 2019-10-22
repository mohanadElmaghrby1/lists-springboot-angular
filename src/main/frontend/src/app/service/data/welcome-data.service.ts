import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    return this.httpClient.get('http://localhost:8080/hello-world-bean/'+name);
  }
}
