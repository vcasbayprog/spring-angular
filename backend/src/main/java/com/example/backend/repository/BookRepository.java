package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {

}
