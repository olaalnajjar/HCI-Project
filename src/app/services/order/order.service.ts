import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private firebaseUrl = 'https://hci-project-e4f9b-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  getStoreOrders() {
    return this.http.get<any>(`${this.firebaseUrl}/Orders.json`).pipe(
      map(response => {
        const storeOrders: any[] = [];
        for (const storeName in response) {
          if (response.hasOwnProperty(storeName)) {
            const orders = response[storeName];
            storeOrders.push({ storeName, orders });
          }
        }
        return storeOrders;
      })
    );
  }
}
