import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id :number,
    public description:string,
    public done:boolean,
    public targetDate : Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,'learn to dance' , false ,new Date() ),
    new Todo(2,'learn to be better' , false ,new Date() ),
    new Todo(3,'learn to eat' , false ,new Date() )
  ]
  // todo = {
  //   id:1,
  //   description: ' learn to dance'
  // }
  constructor() { }

  ngOnInit() {
  }

}
