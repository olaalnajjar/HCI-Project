import { Component } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import{Order} from '../shared/Models/Orders'

@Component({
  selector: 'app-oders',
  templateUrl: './oders.component.html',
  styleUrls: ['./oders.component.css']
})
export class OdersComponent {
  storeOrders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getStoreOrders();
  }

  getStoreOrders(): void {
    this.orderService.getStoreOrders().subscribe(
      orders => {
        this.storeOrders = orders;
      },
      error => {
        console.log('Error:', error);
      }
    );
  }
}
