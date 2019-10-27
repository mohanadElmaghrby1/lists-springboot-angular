package com.example.demo.controller;

import com.example.demo.domain.Post;
import com.example.demo.service.PostService;
import javafx.geometry.Pos;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * create by mohannad on 10/27/2019
 */
@RestController
@CrossOrigin("*")
public class PostController {
    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/posts")
    public List<Post> getAllPosts(){
        return postService.getAll();
    }
}
