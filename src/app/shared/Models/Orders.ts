export class Order {
   storeName: string;
   orders: string[];
   constructor(storeName: string, orders: string[]) {
      this.storeName = storeName;
      this.orders = orders;
    }
  }