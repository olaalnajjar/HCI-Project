import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
    private baseUrl = 'https://hci-project-e4f9b-default-rtdb.firebaseio.com/';
  
    constructor(private http: HttpClient) { }
  
    getUsers(): Observable<any> {
      const url = `${this.baseUrl}/Users.json`;
      return this.http.get<any>(url);
    }
  }
