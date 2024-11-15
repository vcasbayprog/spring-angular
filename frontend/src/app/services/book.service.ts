import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

const baseUrl = 'http://localhost:8080/api/books';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

    findAll():Observable<Book[]>{
      return this.http.get<Book[]>(baseUrl)
    }
    
}
