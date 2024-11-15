import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookCreateService } from '../services/book-create.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css'
})
export class BookCreateComponent {

  newBook:Book = new Book();

  constructor(private bookCreateService:BookCreateService){}

  addBook() {
    this.bookCreateService.create(this.newBook).subscribe({
      next: () => {
        alert('Libro creado exitosamente');
        this.newBook = new Book(); // Reinicia el formulario
      },
      error: (error) => {
        console.log(error);
        alert('Error al crear el libro');
      }
    });
  }
}
