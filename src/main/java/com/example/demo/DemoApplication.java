package com.example.demo;

import com.example.demo.domain.Post;
import com.example.demo.domain.Todo;
import com.example.demo.service.PostService;
import com.example.demo.service.TodoService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(TodoService todoService , PostService postService) {
        return args -> {
            todoService.save(new Todo(1l,"mohannad" , "learn to code",new Date(),false));
            todoService.save(new Todo(2l,"mohannad" , "learn to dsance",new Date(),false));
            todoService.save(new Todo(3l,"mohannad" , "learn to sleep",new Date(),false));

            postService.save(new Post("SOlid In java","In this tutorial, we'll be discussing the SOLID principles of Object-Oriented Design.\n" +
                    "\n" +
                    "First, we'll start by exploring the reasons " +
                    "they came about and why we should consider them when designing software. Then, we'll outline each principle alongside some example code to emphasize " , new Date()));

            postService.save(new Post("SOlid In c++","In this tutorial, we'll be discussing the SOLID principles of Object-Oriented Design.\n" +
                    "\n" +
                    "First, we'll start by exploring the reasons " +
                    "they came about and why we should consider them when designing software. Then, we'll outline each principle alongside some example code to emphasize " , new Date()));


            postService.save(new Post("SOlid In python","In this tutorial, we'll be discussing the SOLID principles of Object-Oriented Design.\n" +
                    "\n" +
                    "First, we'll start by exploring the reasons " +
                    "they came about and why we should consider them when designing software. Then, we'll outline each principle alongside some example code to emphasize " , new Date()));
        };
    }
}
