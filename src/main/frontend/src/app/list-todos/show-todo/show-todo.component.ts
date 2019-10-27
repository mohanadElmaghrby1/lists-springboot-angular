import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../../service/data/todo-data.service";
import {Todo} from "../todo.model";

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  todo:Todo
  constructor(private todoService : TodoDataService) { }

  ngOnInit() {
    this.todoService.onTodoSelected.subscribe(
      (todo :Todo) =>{
        this.todo=todo
      }
    )
  }

}
