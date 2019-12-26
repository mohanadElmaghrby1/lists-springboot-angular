import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Todo} from "../../list-todos/todo.model";
import {TODO_URL} from "../../constant/app.constant";
import {HelloWorldBean} from "./welcome-data.service";
import {BasicAuthenticationService} from "../basic-authentication.service";


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  onTodoSelected = new EventEmitter<Todo>()


  // onTodoRemoved = new EventEmitter<Todo>()
  constructor(private http: HttpClient , private basicAuthenticationService : BasicAuthenticationService) { }



  retrieveAllTodos(username){
    let headers = this.getHeader()
    return this.http.get(`${TODO_URL}users/${username}/todos` ,
      {headers});
  }

  private getHeader() {
    let basicAuthHeader = this.basicAuthenticationService.getAuthenticatedToken();
    let headers = new HttpHeaders({
      Authorization : basicAuthHeader
    })
    return headers;
  }

  deleteTodo(id){
    let headers = this.getHeader()
    return this.http.delete(`${TODO_URL}users/mohannad/todos/${id}`
      , {headers});
  }

  getTodo(id){
    let headers = this.getHeader()
    return this.http.get(`${TODO_URL}users/mohannad/todos/${id}`
  , {headers});

  }


  saveOrUpdateTodo(todo){
    let headers = this.getHeader()
    return this.http.post(`${TODO_URL}users/mohannad/todos/`,todo
    ,{headers});
  }

  // createBasicAuthHeader():string{
  //   let username = 'mohannad'
  //   let password= '123'
  //   let basicHeader = 'Basic '+window.btoa(username+':'+password)
  //   return basicHeader;
  // }


  // executeHelloWorldServiceWithPathVariable(name) {
  //   let basicAuthHeaderString = this.basicAuth.getAuthenticatedToken();
  //
  //   let headers = new HttpHeaders({
  //     Authorization: basicAuthHeaderString
  //   })
  //
  //   return this.http.get<HelloWorldBean>(
  //     `http://localhost:8080/hello-world/path-variable/${name}`,
  //     {headers}
  //   );
  // }
}
