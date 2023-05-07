import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor() { }
  getAll():String[]{
    return ['assets/Images/Burger_King_logo_(1999).svg.png',
            'assets/Images/cookdoor.png',
            'assets/Images/dominos-pizza5190.jpg',
            'assets/Images/mc.jpg',
            'assets/Images/Mori-Sushi-.png',
            'assets/Images/papa johns.png',
            'assets/Images/pizza hut.jpg',
            'assets/Images/starbucks.jpg',
            'assets/Images/subway.jpg'
        ]
  }
}
