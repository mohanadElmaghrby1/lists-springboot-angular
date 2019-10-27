package com.example.demo.service;

import com.example.demo.domain.Post;
import com.example.demo.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * create by mohannad on 10/27/2019
 */
@Service
public class PostServiceImpl implements PostService {
    private PostRepository postRepository;

    public PostServiceImpl(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public Post save(Post post) {
        return postRepository.save(post);
    }

    @Override
    public List<Post> getAll() {
        return postRepository.findAll();
    }
}
