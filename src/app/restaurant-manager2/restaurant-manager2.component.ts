import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-manager2',
  templateUrl: './restaurant-manager2.component.html',
  styleUrls: ['./restaurant-manager2.component.css']
})
export class RestaurantManager2Component {
  deliveryFee: number = 0.0;
  deliveryCities: string[] = [];
  cookingTime: number = 30;
  cuisineType: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDeliverySettings();
  }

  getDeliverySettings() {
    this.http.get<any>('https://hci-project-32b58-default-rtdb.firebaseio.com/Users/user1/Type.json').subscribe(
      (response) => {
        this.deliveryFee = response.deliveryFee || 0.0;
        this.deliveryCities = response.deliveryCities || [];
        this.cookingTime = response.cookingTime || 30;
        this.cuisineType = response.cuisineType || '';
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }

  saveDeliverySettings() {
    const settings = {
      deliveryFee: this.deliveryFee,
      deliveryCities: this.deliveryCities,
      cookingTime: this.cookingTime,
      cuisineType: this.cuisineType
    };

    this.http.put('https://hci-project-32b58-default-rtdb.firebaseio.com/Users/user1/Type.json', settings).subscribe(
      () => {
        console.log('Delivery settings saved successfully!');
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}
