package com.example.demo.service;

import com.example.demo.domain.Todo;

import java.util.List;

/**
 * create by mohannad on 10/22/2019
 */
public interface TodoService  {
    List<Todo> getAllTodos(String username);
    void deleteById(long id);
    Todo save(Todo todo);
}

