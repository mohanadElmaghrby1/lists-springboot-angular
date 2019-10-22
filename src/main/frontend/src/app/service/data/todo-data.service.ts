import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../list-todos/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {


  // onTodoRemoved = new EventEmitter<Todo>()
  constructor(private http: HttpClient) { }

  retrieveAllTodos(username){
    return this.http.get(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(id){
    return this.http.delete(`http://localhost:8080/users/mohannad/todos/${id}`);
  }
}
