import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/Models/Food';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import 'firebase/database'
import { StoresService } from '../stores/stores.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  storeName!:string
  baseUrl="https://hci-project-e4f9b-default-rtdb.firebaseio.com";
  


  constructor(private http: HttpClient) {}

  getDishes(): Observable<any> {
    console.log(this.storeName);
    
    const url = `${this.baseUrl}/Dishes/${this.storeName}.json`;
    console.log( this.http.get<any>(url));
    
    return this.http.get<any>(url);
  }
  setTittleName(title:string){
    this.storeName=title
  }

}