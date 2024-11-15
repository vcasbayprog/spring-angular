import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { BookCreateService } from '../services/book-create.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books?: Book[];
  newBook: Book = new Book();
  constructor(private bookService: BookService, private bookCreateService: BookCreateService) { }
  ngOnInit(): void {
    this.fetchBooks();
  }



  private fetchBooks() {
    this.bookService.findAll().subscribe({
      next: value => {
        this.books = value;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  addBook() {
    this.bookCreateService.create(this.newBook).subscribe({
      next: () => {
        this.fetchBooks(); 
        this.newBook = new Book(); 
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
