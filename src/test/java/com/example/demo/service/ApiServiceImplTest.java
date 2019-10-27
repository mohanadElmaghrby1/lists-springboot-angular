package com.example.demo.service;

import com.example.demo.domain.Todo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;
@RunWith(SpringRunner.class)
@SpringBootTest
public class ApiServiceImplTest {

    @Autowired
    ApiService apiService;


    @Test
    public void testGetTodo() {
        Todo todo = apiService.getTodo("3");
        assertEquals(new Long(3) , todo.getId());
    }
}
