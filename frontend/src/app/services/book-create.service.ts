import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

const baseUrl= "http://localhost:8080/api/books";
@Injectable({
  providedIn: 'root'
})
export class BookCreateService {

  constructor(private http:HttpClient) { }

  create(book:Book):Observable<any>{
    return this.http.post(baseUrl,book);
  }
}
