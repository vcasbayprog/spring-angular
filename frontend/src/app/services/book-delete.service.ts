import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = "http://localhost:8080/api/books";  

@Injectable({
  providedIn: 'root'
})
export class BookDeleteService {

  constructor(private http:HttpClient) { }


  deleteBook(id:number){
    return this.http.delete(`${baseUrl}/${id}`);
    }
}
