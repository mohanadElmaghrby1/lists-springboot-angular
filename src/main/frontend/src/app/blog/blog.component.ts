import { Component, OnInit } from '@angular/core';
import {Todo} from "../list-todos/todo.model";
import {Post} from "./post.model";
import {PostDataService} from "../service/data/post-data.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts : Post[]=[]

  constructor(private postDataService :PostDataService) { }

  ngOnInit() {
    this.postDataService.getAllPosts().subscribe(
      (posts:Post[]) =>{
        this.posts=posts
      },
      error => {console.log(error)}
    )
  }

}
