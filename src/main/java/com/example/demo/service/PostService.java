package com.example.demo.service;

import com.example.demo.domain.Post;
import javafx.geometry.Pos;

import java.util.List;

/**
 * create by mohannad on 10/27/2019
 */
public interface PostService {
    Post save(Post post);
    List<Post> getAll();
}
