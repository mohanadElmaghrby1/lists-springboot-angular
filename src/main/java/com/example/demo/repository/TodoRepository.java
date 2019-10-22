package com.example.demo.repository;

import com.example.demo.domain.Todo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * create by mohannad on 10/22/2019
 */
public interface TodoRepository extends CrudRepository<Todo,Long> {
    List<Todo>findByUsername(String username);
    void deleteById(long id);

}
