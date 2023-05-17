import { Injectable } from '@angular/core';
import { Store } from 'src/app/shared/Store'; 
import { AngularFireDatabase } from '@angular/fire/compat/database';
import 'firebase/database'
import { Food } from 'src/app/shared/Models/Food';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoresService {


  apiUrl="https://hci-project-e4f9b-default-rtdb.firebaseio.com";
  title!:string

  constructor(private http: HttpClient) { 
  
    
  }

  
  getStores(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Store.json`);
  }
  getStoreByTitle() {
    const url = `${this.apiUrl}/Store/${this.title}.json`;
    return this.http.get(url);
  }
  setTittleName(title:string){
    this.title=title
  }
}
