import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/Models/Food';
@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})

 export class FoodPageComponent implements OnInit {
  dishes!: Food[]
  
  constructor(private foodService: FoodService , private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    this.loadDishes();
    this.getDishesForStore();
  }

  loadDishes(): void {
    this.foodService.getDishes().subscribe(
      dishes => {
        if (dishes) {
          this.dishes = Object.values(dishes);
        }
      },
      error => {
        console.log('Error:', error);
      }
    );
  }
  getDishesForStore(): void {
    this.foodService.getDishes().subscribe(
      (dishes) => {
        this.dishes=dishes
        console.log(dishes);
      }
    );
  }
  addToCart(dish_name: string, Price:number, Image:string,Description:string,Status:string) {
      
      item:Food; 
      console.log(Price);
      
      const item = {dish_name:dish_name,Price:Price, Image:Image, Description:Description,Status:Status};
      this.cartService.addToCart(item);
      this.router.navigateByUrl('/cart-page');
      
    
  }
}