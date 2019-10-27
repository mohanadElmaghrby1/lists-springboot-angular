package com.example.demo.controller;

import com.example.demo.domain.Todo;
import com.example.demo.repository.TodoRepository;
import com.example.demo.service.TodoService;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.ui.Model;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

public class TodoControllerTest {
    TodoController todoController;

    MockMvc mockMvc;

    @Mock
    TodoService todoService;

    @BeforeEach
    public void setUp() throws Exception {
        //setup mocks , telling mockito that we want RecipeService mock
        MockitoAnnotations.initMocks(this);

        todoController=new TodoController(todoService);

        //create mock mvc
        mockMvc = MockMvcBuilders.standaloneSetup(todoController).build();

    }


    @Test
    public void testGetAllTodos() {

    }

    @Test
    public void getTodo() throws Exception {
        Todo todo =new Todo();
        todo.setId(1l);
        todo.setDone(false);
        todo.setDescription("study hard");

        when(todoService.getTodo(any())).thenReturn(todo);

//        //when then
//        mockMvc.perform(get("/users/mohannad/todos/1"))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.id" , equalTo("1")));

    }
}
