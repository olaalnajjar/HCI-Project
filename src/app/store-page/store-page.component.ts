import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/Store';
import { ActivatedRoute ,Router} from '@angular/router';
import { StoresService } from '../services/stores/stores.service';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  store!: Store;
  constructor(private activatedRoute:ActivatedRoute,private foodService:FoodService, private StoreService:StoresService,private cartService: CartService, private router: Router){
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.store = StoreService.getStoreByID(params['id']);
      foodService.setCurrentStoreId(params['id']);
    })
}
ngOnInit():void{}


}
