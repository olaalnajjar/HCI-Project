import { Component } from '@angular/core';
import { SlideInterface } from '../slide.interface';

@Component({
  selector: 'app-manger1',
  templateUrl: './manger1.component.html',
  styleUrls: ['./manger1.component.css']
})
export class Manger1Component {
  showComponentA: boolean = true;
  showComponentB: boolean = false;
  slides: SlideInterface[] = [
    { url: '/assets/Images/dominos-pizza5190.jpg', title: 'dominos' },
    { url: '/assets/Images/mc.jpg', title: 'mcdonalds'},
    { url:'/assets/Images/pizza hut.jpg', title: 'pizza hut' },
    { url:'/assets/Images/starbucks.jpg', title: 'starbucks' }
  ];

  CustmerOrders(){}
  Customers(){}
}
