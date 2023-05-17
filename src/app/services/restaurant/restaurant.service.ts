import { Injectable } from '@angular/core';
import 'firebase/database'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getUserType(): Observable<any> {
    return this.http.get('https://hci-project-32b58-default-rtdb.firebaseio.com/Users/user1/Type.json');

  }

  addMenuCategory(inputData:string){
    console.log(inputData);
    this.http.post('https://hci-project-32b58-default-rtdb.firebaseio.com/Restaurants/restaurant1/Categories/Category1.json', inputData).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );

  }

}
