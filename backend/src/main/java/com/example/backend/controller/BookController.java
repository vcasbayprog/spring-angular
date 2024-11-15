package com.example.backend.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Book;
import com.example.backend.service.BookService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = { "http://localhost:4200/" })
public class BookController {

    private final BookService bookService;

    @GetMapping
    public List<Book> devolverTodosLosLibros() {
        return this.bookService.getAllBooks();

    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        Book book = bookService.getBookById(id);
        if (book != null) {
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping()
    public ResponseEntity<Book> crearLibro(@RequestBody Book book) {
        Book createdBook = bookService.createBook(book);
        return new ResponseEntity<>(createdBook, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> borrarLibro(@PathVariable Long id) {
        boolean eliminado = bookService.deleteBookById(id);
        if (eliminado) {
            return ResponseEntity.noContent().build();

        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> actualizarLibro(@PathVariable Long id, @RequestBody Book book) {
        Book updatedBook = bookService.updateBook(id, book);
        return updatedBook != null ? ResponseEntity.ok(updatedBook) : ResponseEntity.notFound().build();
    }

}
