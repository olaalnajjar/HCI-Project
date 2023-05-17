import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/Models/Cart';
import { CartItem } from 'src/app/shared/Models/CartItem';
import { Food } from 'src/app/shared/Models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }
  private cart:Cart = new Cart();
  
  addToCart(food: Food):void{
    let cartItem = this.cart.items.find(item => item.food.dish_name === food.dish_name);
    if(cartItem){
      this.changeQuantity(food.dish_name, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.http.post(`https://hci-project-e4f9b-default-rtdb.firebaseio.com/Orders/ ${this.storeName}.json` ,JSON.stringify(food.dish_name)).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
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
  storeName!:string
  setTittleName(title:string){
    this.storeName=title}
}
