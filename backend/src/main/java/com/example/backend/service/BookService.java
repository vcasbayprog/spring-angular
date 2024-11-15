package com.example.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backend.model.Book;
import com.example.backend.repository.BookRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    

    public List<Book> getAllBooks() {
        
        return this.bookRepository.findAll();
        
    }

    public Book getBookById(Long id){
        return bookRepository.findById(id).orElse(null);
    }

    public Book createBook(Book book){
        return bookRepository.save(book);
    }

    public boolean deleteBookById(Long id) {
        if (bookRepository.existsById(id)) {
            bookRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Book updateBook(Long id, Book book) {
        return bookRepository.findById(id).map(existingBook -> {
            if (book.getTitle() != null) existingBook.setTitle(book.getTitle());
            if (book.getAuthor() != null) existingBook.setAuthor(book.getAuthor());
            return bookRepository.save(existingBook);
        }).orElse(null);
    }
    
    



}
