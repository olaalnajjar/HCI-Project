import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/Models/Food';
import { HttpClient } from '@angular/common/http';
import { StoresService } from '../services/stores/stores.service';
@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})

export class FoodPageComponent implements OnInit {
  foods:Food[]=[{
    Description: "Crepe with Chicken pane pieces and cheese, with added vegetables and sauces",
    Image: "https://firebasestorage.googleapis.com/v0/b/wagba-6d791.appspot.com/o/chicken_pane.jpg?alt=media&token=a207090a-4cf5-4ca5-8d81-cecfbcf7f6b1",
    Price: 42,
    Status:"https://firebasestorage.googleapis.com/v0/b/wagba-6d791.appspot.com/o/checked.png?alt=media&token=009c5792-16b7-4ae0-9545-b63e3088c3bc",
    dish_name: "Chicken Pane"}];

  constructor(private storeServices : StoresService,private httpClient:HttpClient ,private foodService:FoodService, private route: ActivatedRoute, private cartService: CartService, private router: Router)
  {
    route.params.subscribe((params) => {
    if(params['id'])
    this.foods = foodService.getAll();
  })
  }
 

  ngOnInit():void{
  }


  addToCart(dish_name: string){
   var item = this.foods.findIndex(food => food.dish_name == dish_name);
    this.cartService.addToCart(this.foods[item]);
    this.router.navigateByUrl('/cart-page');
  }

}