import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http : HttpClient) { }

  getAllPosts(){
    return this.http.get("http://localhost:8080/posts")
  }
}
