import { Injectable } from '@angular/core';
import { store } from '../shared/Store';
@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor() { }
  getAll():store[]{
    return [
      {
        id: 1,
        name: 'Pizza Hut',
        price: 10,
        stars: 4.5,
        imageUrl: '/assets/Images/pizza hut.jpg'
      },
      {
        id: 2,
        name: 'Papa Johns',
        price: 20,
        stars: 4.7,
        imageUrl: '/assets/Images/papa johns.png'
      },
      {
        id: 3,
        name: 'Mori Sushi',
        price: 5,
        stars: 3.5,
        imageUrl: '/assets/Images/Mori-Sushi-.png'
      },
      {
        id: 4,
        name: 'McDonalds',
        price: 2,
        stars: 3.3,
        imageUrl: '/assets/Images/mc.jpg'
      },
      {
        id: 5,
        name: 'Cookdoor',
        price: 11,
        stars: 3.0,
        imageUrl: '/assets/Images/cookdoor.png'
      },
      {
        id: 6,
        name: 'Burger King',
        price: 9,
        stars: 4.0,
        imageUrl: '/assets/Images/burgerking.jpg'
      },
      {
        id: 7,
        name: 'Starbucks',
        price: 9,
        stars: 4.0,
        imageUrl: '/assets/Images/starbucks.jpg'
      },
      {
        id: 8,
        name: 'Subuway',
        price: 9,
        stars: 4.0,
        imageUrl: '/assets/Images/subway.jpg'
      },
      {
        id: 9,
        name: 'Buffalo Burger',
        price: 120,
        stars: 4.0,
        imageUrl: '/assets/Images/buffalo.png'
      }
    ];
   
  }
}
