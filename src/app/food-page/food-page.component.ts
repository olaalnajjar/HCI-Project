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

  foods:Food[] =[]
  constructor(private foodService:FoodService, private route: ActivatedRoute, private cartService: CartService, private router: Router){}

  ngOnInit():void{
    this.foods= this.foodService.getAll();
  }


  addToCart(id: number){
    this.cartService.addToCart(this.foods[id]);
    this.router.navigateByUrl('/cart-page');
  }

}