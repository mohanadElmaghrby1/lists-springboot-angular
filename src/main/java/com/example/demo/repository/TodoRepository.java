package com.example.demo.repository;

import com.example.demo.domain.Todo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

/**
 * create by mohannad on 10/22/2019
 */
public interface TodoRepository extends CrudRepository<Todo,Long> {
    List<Todo>findByUsername(String username);
    void deleteByIdAndUsername(long id, String username);
    Optional<Todo> findByIdAndUsername(long id , String username);
}
