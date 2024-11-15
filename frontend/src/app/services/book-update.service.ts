import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
const baseUrl = "http://localhost:8080/api/books";
@Injectable({
  providedIn: 'root'
})
export class BookUpdateService {

  constructor(private http: HttpClient) { }

  // Obtener los detalles de un libro por ID
  getBookById(id: number) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Actualizar un libro
  updateBook(id: number, book: any) {
    return this.http.put(`${baseUrl}/${id}`, book);
  }
}
