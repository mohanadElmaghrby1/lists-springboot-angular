import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name =''
  constructor(private route : ActivatedRoute
              ,private welcomeService : WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['username'];
    console.log('welcome '+this.name)
  }

  executeWelcome() {
    console.log(this.welcomeService.getWelcomeMessage().subscribe(
      response => console.log(response)
    ))
  }
}
