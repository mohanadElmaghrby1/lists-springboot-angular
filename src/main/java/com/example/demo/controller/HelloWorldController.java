package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * created by mohannad  on 19/10/19
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    //GET
    //URI -/hello-world
    //method - 'hello world
    @GetMapping(path="/hello-world")
    public String HelloWorld(){
        return "Hello World";
    }


    @GetMapping(path="/hello-world-bean")
    public HellowWorldBean HelloWorldbean(){
        return new HellowWorldBean("Hello World");
    }

    @GetMapping(path="/hello-world-bean/{name}")
    public HellowWorldBean HelloWorldbeanPAthVar(@PathVariable String name){
        return new HellowWorldBean(String.format("Hello World , %s" , name));
    }

    ///hello-world/path-variable/in28minutes
    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HellowWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HellowWorldBean(String.format("Hello World, %s", name));
    }
}
