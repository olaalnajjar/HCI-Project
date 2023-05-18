import { Injectable } from '@angular/core';
import 'firebase/database'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Restaurant2Service {

  constructor(private http: HttpClient) { }

  changeDeliveryFee(price:string){
    this.http.put('https://hci-project-32b58-default-rtdb.firebaseio.com/Restaurants/restaurant1/Settings/Delivery%20Fees.json', price).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}
