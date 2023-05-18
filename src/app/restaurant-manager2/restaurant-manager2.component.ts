import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Restaurant2Service } from '../services/restaurant2/restaurant2.service';

@Component({
  selector: 'app-restaurant-manager2',
  templateUrl: './restaurant-manager2.component.html',
  styleUrls: ['./restaurant-manager2.component.css']
})
export class RestaurantManager2Component {
  deliveryFee = "0.0";
  deliveryCities: string[] = [];
  cookingTime="30";
  cuisineType= '';

  constructor(private restaurant2Service: Restaurant2Service) {}

  data:any;

  ngOnInit() {
    this.getDataFromService();
  }


  getDataFromService(){
    this.restaurant2Service.getAllSettings().subscribe(
      (response) => {
        this.data = response;
        console.log('Received data:', this.data);
        this.data = response;
        this.cookingTime = this.data['Cooking Time'];
        this.cuisineType = this.data['Cuisine Type'];
        this.deliveryCities = this.data['Delivery Cities'];
        this.deliveryFee = this.data['Delivery Fees'];

      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }

  changeDeliveryFee(){
    this.restaurant2Service.changeDeliveryFee(this.deliveryFee);
  }


}
