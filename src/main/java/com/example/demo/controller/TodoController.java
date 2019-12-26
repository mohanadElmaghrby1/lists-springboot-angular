package com.example.demo.controller;

import com.example.demo.domain.Todo;
import com.example.demo.service.TodoService;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * create by mohannad on 10/22/2019
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@PreAuthorize("hasRole('ROLE_USER')")
public class TodoController {

    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PreAuthorize("#username == authentication.name")
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable  String username){
        return todoService.getAllTodos(username);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public void deleteTodo(@PathVariable  String username , @PathVariable String id){
         todoService.deleteById(Long.parseLong(id),username);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable  String username , @PathVariable String id){
        return todoService.getTodo(Long.parseLong(id),username);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/users/{username}/todos")
    public Todo saveOrUpdate(@PathVariable String username , @RequestBody Todo todo){
        return todoService.save(todo,username);
    }




}
