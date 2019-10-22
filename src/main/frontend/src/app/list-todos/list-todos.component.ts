import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Todo} from "./todo.model";

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[]=[]
  message: string;
  constructor(private todoService : TodoDataService) { }

  ngOnInit() {
    // this.todoService.onTodoRemoved.subscribe(this.refreshTodos())
    this.refreshTodos()
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      response =>{
        console.log('delete todo ' + id)
        this.message=`Delete of Todo ${id} Successful!`
        this.refreshTodos()
      }
      ,error => {    console.log('error to delete todo ' + id)
        this.refreshTodos()}
    )
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('mohannad').subscribe(
      (response : Todo[]) =>{this.todos=response}
    )
  }
}
