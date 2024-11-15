import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Para obtener el ID de la URL
import { BookUpdateService } from '../services/book-update.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  book: any = {};  // Para almacenar los datos del libro a actualizar
  bookId: number = 0;  // Para almacenar el ID del libro a actualizar

  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private bookUpdateService: BookUpdateService, // Servicio para actualizar el libro
    private router: Router  // Para redirigir después de la actualización
  ) {}

  ngOnInit(): void {
    // Obtener el ID del libro desde la URL
    this.bookId = +this.route.snapshot.paramMap.get('id')!;
    
    // Aquí puedes hacer una solicitud para obtener los datos del libro si es necesario
    // Por ejemplo, llamando a un servicio que obtiene los detalles del libro
    this.getBookDetails();
  }

  // Método para obtener los detalles del libro a través de un servicio
  getBookDetails(): void {
    // Aquí deberías llamar a un servicio que devuelva los detalles del libro por su ID
    // Si ya tienes los datos del libro en algún lugar, los puedes cargar en `this.book`
    // Ejemplo de uso (si tienes un servicio para obtener los datos):
    this.bookUpdateService.getBookById(this.bookId).subscribe(bookData => {
      this.book = bookData;
    });
  }

  // Método para actualizar el libro
  updateBook(): void {
    this.bookUpdateService.updateBook(this.bookId, this.book).subscribe(
      (response) => {
        console.log('Libro actualizado:', response);
        // Redirigir a la lista de libros después de la actualización
        this.router.navigate(['/books']);
      },
      (error) => {
        console.error('Error al actualizar libro:', error);
      }
    );
  }
}
