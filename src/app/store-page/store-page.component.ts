import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/Store';
import { ActivatedRoute ,Router} from '@angular/router';
import { StoresService } from '../services/stores/stores.service';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  store!: Store;
  constructor(private activatedRoute:ActivatedRoute, private StoreService:StoresService,private cartService: CartService, private router: Router){
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.store = StoreService.getStoreByID(params['id']);
    })
}
ngOnInit():void{}

// addToCart(){
//   this.cartService.addToCart(this.store);
//   this.router.navigateByUrl('/cart-page');
// }
}
