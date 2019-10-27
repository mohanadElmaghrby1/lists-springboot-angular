import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ErrorComponent} from "./error/error.component";
import {ListTodosComponent} from "./list-todos/list-todos.component";
import {LogoutComponent} from "./logout/logout.component";
import {RouteGuardService} from "./service/route-guard.service";
import {TodoComponent} from "./todo/todo.component";
import {BlogComponent} from "./blog/blog.component";


const routes: Routes = [
  {path: 'login' , component : LoginComponent } ,
  {path: 'logout' , component : LogoutComponent, canActivate:[RouteGuardService]} ,
  {path: '' , component : LoginComponent, canActivate:[RouteGuardService]} ,
  { path : 'welcome/:username' , component : WelcomeComponent, canActivate:[RouteGuardService]} ,
  { path : 'todos' , component : ListTodosComponent, canActivate:[RouteGuardService]} ,
  { path : 'blogs' , component : BlogComponent, canActivate:[RouteGuardService]} ,
  { path : 'todos/:id' , component : TodoComponent, canActivate:[RouteGuardService]} ,

  { path : '**' , component : ErrorComponent} // it should be the last one
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

