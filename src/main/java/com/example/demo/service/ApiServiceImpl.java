package com.example.demo.service;

import com.example.demo.domain.Todo;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * create by mohannad on 10/27/2019
 */
@Service
public class ApiServiceImpl implements ApiService{
    private RestTemplate restTemplate;

    public ApiServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public Todo getTodo(String id) {
        return restTemplate.getForObject("http://localhost:8080//users/mohannad/todos/3" , Todo.class);
    }
}
