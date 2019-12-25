import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Todo} from "../../list-todos/todo.model";
import {TODO_URL} from "../../constant/app.constant";


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  onTodoSelected = new EventEmitter<Todo>()


  // onTodoRemoved = new EventEmitter<Todo>()
  constructor(private http: HttpClient) { }

  retrieveAllTodos(username){
    let basicAuthHeader = this.createBasicAuthHeader();
    let headers = new HttpHeaders({
      Authorization : basicAuthHeader
    })

    return this.http.get(`${TODO_URL}users/${username}/todos` , {headers});
  }

  deleteTodo(id){
    return this.http.delete(`${TODO_URL}users/mohannad/todos/${id}`);
  }

  getTodo(id){
    return this.http.get(`${TODO_URL}users/mohannad/todos/${id}`);
  }

  saveOrUpdateTodo(todo){
    return this.http.post(`${TODO_URL}users/mohannad/todos/`,todo);
  }

  createBasicAuthHeader():string{
    let username = 'mohannad'
    let password= '123'
    let basicHeader = 'Basic '+window.btoa(username+':'+password)
    return basicHeader;
  }
}
