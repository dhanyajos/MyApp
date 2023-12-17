import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getTodo(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
