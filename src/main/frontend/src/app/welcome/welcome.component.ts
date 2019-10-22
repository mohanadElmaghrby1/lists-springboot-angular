import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HelloWorldBean, WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name =''
  welcomeMessageFromService:string
  constructor(private route : ActivatedRoute
              ,private welcomeService : WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['username'];
    console.log('welcome '+this.name)
  }

  executeWelcome() {
    console.log(this.welcomeService.getWelcomeMessageWithPathVariable(this.name).subscribe(
      (response : HelloWorldBean) => this.handleSuccessFulResponse(response),
      error => this.handleErorrResponse(error)
    ))
  }

  private handleErorrResponse(error) {
    console.log(error)
    this.welcomeMessageFromService=error.message
  }

  private handleSuccessFulResponse(response) {
    console.log(response.message)
    this.welcomeMessageFromService=response.message
  }
}
