package com.example.demo.service;

import com.example.demo.domain.Todo;
import com.example.demo.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * create by mohannad on 10/22/2019
 */
@Service
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;

    ArrayList<Todo> initialTodos =new ArrayList<>();
    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
        initialTodos.add(new Todo(1l,"mohannad" , "learn to code",new Date(),false));
        initialTodos.add(new Todo(2l,"mohannad" , "learn to dance",new Date(),false));
        initialTodos.add(new Todo(2l,"mohannad" , "learn to sleep",new Date(),false));
    }

    @Override
    public List<Todo> getAllTodos(String username) {
        return todoRepository.findByUsername(username);
//        return initialTodos;
    }

    @Override
    public void deleteById(long id) {
        todoRepository.deleteById(id);
    }

    @Override
    public Todo save(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public Todo getTodo(long id) {
        return todoRepository.findById(id).get();
    }
}
