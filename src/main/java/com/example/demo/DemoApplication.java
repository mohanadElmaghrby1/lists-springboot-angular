package com.example.demo;

import com.example.demo.domain.Todo;
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
    CommandLineRunner runner(TodoService todoService) {
        return args -> {
            todoService.save(new Todo(1l,"mohannad" , "learn to code",new Date(),false));
            todoService.save(new Todo(2l,"mohannad" , "learn to dsance",new Date(),false));
            todoService.save(new Todo(3l,"mohannad" , "learn to sleep",new Date(),false));
        };
    }
}
