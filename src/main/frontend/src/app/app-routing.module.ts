import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ErrorComponent} from "./error/error.component";
import {ListTodosComponent} from "./list-todos/list-todos.component";


const routes: Routes = [
  {path: '' , component : LoginComponent} ,
  {path: 'login' , component : LoginComponent} ,
  { path : 'welcome/:username' , component : WelcomeComponent} ,
  { path : 'todos' , component : ListTodosComponent} ,
  { path : '**' , component : ErrorComponent} // it should be the last one
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

