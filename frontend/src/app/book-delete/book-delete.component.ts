import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDeleteService } from '../services/book-delete.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookDeleteService: BookDeleteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.bookDeleteService.deleteBook(id).subscribe({
        next: () => {
          alert('Libro eliminado exitosamente');
          this.router.navigate(['/books']); // Redirige a la lista después de eliminar
        },
        error: () => {
          alert('Error al eliminar el libro');
        }
      });
    }
  }
}
