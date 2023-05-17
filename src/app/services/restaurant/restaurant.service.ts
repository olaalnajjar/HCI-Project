import { Injectable } from '@angular/core';
import 'firebase/database'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  valuesArray: any[] = [];

  constructor(private http: HttpClient) { }

  getUserType(): Observable<any> {
    return this.http.get('https://hci-project-32b58-default-rtdb.firebaseio.com/Users/user1/Type.json');

  }

  addMenuCategory(category: string) {
    console.log(category);
    const data={
    name:category
    };
    this.http.put('https://hci-project-32b58-default-rtdb.firebaseio.com/Restaurants/restaurant1/Categories/'+category+'.json', data).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );

  }

  addCategoryItems(item: string, category:string) {
    console.log(item);
    const data={
      name:item
      };
    this.http.put('https://hci-project-32b58-default-rtdb.firebaseio.com/Restaurants/restaurant1/Categories/'+category+'/Dishes/'+item+'.json', data).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );

  }

  getRestaurantCategories(): Observable<any[]>{
    const firebaseUrl = 'https://hci-project-32b58-default-rtdb.firebaseio.com/Restaurants/restaurant1/Categories.json';

    return this.http.get<any[]>(firebaseUrl);
  }

  getCategoryItems(category:string): Observable<any[]>{
    const firebaseUrl = 'https://hci-project-32b58-default-rtdb.firebaseio.com/Restaurants/restaurant1/Categories/'+category+'/Dishes.json';

    return this.http.get<any[]>(firebaseUrl);
  }
  

}
