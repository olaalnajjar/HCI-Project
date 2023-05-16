import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/Models/Cart';
import { CartItem } from 'src/app/shared/Models/CartItem';
import { Food } from 'src/app/shared/Models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();
  
  addToCart(food: Food):void{
    let cartItem = this.cart.items.find(item => item.food.dish_name === food.dish_name);
    if(cartItem){
      this.changeQuantity(food.dish_name, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(food_name:string): void{
    this.cart.items = 
    this.cart.items.filter(item => item.food.dish_name != food_name);
  }

  changeQuantity(food_name:string, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.dish_name === food_name);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
