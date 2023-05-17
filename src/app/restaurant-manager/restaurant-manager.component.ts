import { Component } from '@angular/core';
import { RestaurantService } from '../services/restaurant/restaurant.service';

@Component({
  selector: 'app-restaurant-manager',
  templateUrl: './restaurant-manager.component.html',
  styleUrls: ['./restaurant-manager.component.css']
})
export class RestaurantManagerComponent {
  addedCategory='';
  addedItem='';

  constructor(private restaurantService: RestaurantService) {}

  onAddCategory(){
    this.restaurantService.addMenuCategory(this.addedCategory);
  }

  onAddItem(){

  }

}
