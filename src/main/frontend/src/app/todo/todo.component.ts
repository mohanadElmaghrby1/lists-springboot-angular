import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Todo} from "../list-todos/todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id
  todo:Todo
  constructor(private todoService :TodoDataService
              ,private route :ActivatedRoute
              ,private router :Router ) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.todo = new Todo(1,'','',new Date().toDateString() , false)
    this.todoService.getTodo(this.id).subscribe(
      (todo :Todo) =>{
        this.todo=todo
        console.log(todo)
      },
      error => {
        console.log(error)
      }
    )
  }

  saveTodo() {
    this.todoService.saveOrUpdateTodo(this.todo).subscribe(
      (response:Todo) =>{
        console.log("updated : "+response)
        this.router.navigate(['todos'])

      }, error => {
        console.log(error)
      }
    )
  }
}
