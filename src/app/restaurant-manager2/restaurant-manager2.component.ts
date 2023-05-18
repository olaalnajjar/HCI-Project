import { Component } from '@angular/core';
import { Restaurant2Service } from '../services/restaurant2/restaurant2.service';

@Component({
  selector: 'app-restaurant-manager2',
  templateUrl: './restaurant-manager2.component.html',
  styleUrls: ['./restaurant-manager2.component.css']
})
export class RestaurantManager2Component {

  constructor(private restaurantService2: Restaurant2Service) {}

  updateDeliveryFees(price:string){
    this.restaurantService2.changeDeliveryFee(price);
  }

}
