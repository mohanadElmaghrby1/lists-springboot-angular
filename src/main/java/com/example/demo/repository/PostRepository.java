package com.example.demo.repository;

import com.example.demo.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

/**
 * create by mohannad on 10/27/2019
 */
public interface PostRepository extends JpaRepository<Post, Long> {
}
