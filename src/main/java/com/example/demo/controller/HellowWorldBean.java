package com.example.demo.controller;

/**
 * created by mohannad  on 19/10/19
 */
public class HellowWorldBean {
    private String message ;

    public HellowWorldBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
