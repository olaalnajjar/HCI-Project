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
  selectedCategory='';
  categories: any[] = [];
  items: any[] = [];

  constructor(private restaurantService: RestaurantService) {}
  
  ngOnInit() {
    this.getChildrenValues();
  }

  getChildrenValues() {
    this.restaurantService.getRestaurantCategories().subscribe(
      (response) => {
        this.categories = Object.keys(response);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }

  onAddCategory(){
    this.restaurantService.addMenuCategory(this.addedCategory);
    this.getChildrenValues();
    this.addedCategory='';
  }

  onAddItem(){
    if(this.selectedCategory!=""){
      this.restaurantService.addCategoryItems(this.addedItem, this.selectedCategory);
    }
    this.categoryClicked(this.selectedCategory)

  }

  categoryClicked(category:string){
    console.log(category);
    this.selectedCategory=category;
    this.restaurantService.getCategoryItems(category).subscribe(
      (response) => {
        this.items = Object.keys(response);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }

}
