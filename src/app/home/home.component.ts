import { Component } from '@angular/core';
import { StoresService } from '../services/stores/stores.service';
import { Store } from '../shared/Store';
import { ActivatedRoute,Router } from '@angular/router';
import { SlideInterface } from '../slide.interface';
import { Observable } from 'rxjs';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public currentStoreId!:number;
  constructor(private StoreService:StoresService,private cartServ: CartService, private route: ActivatedRoute, private router: Router,private foodService: FoodService){}
  stores!: Store[];
  
  selectedTag: string = '';


  ngOnInit():void{
    this.getStores();
    this.filterStores();
  }


  getStores() {
    this.StoreService.getStores().subscribe(stores => {
      this.stores = Object.values(stores);
    });
  }
  titleName(title:string){
    this.StoreService.setTittleName(title);
    this.foodService.setTittleName(title);
    this.cartServ.setTittleName(title);

    console.log(title);
    
  }

  filterStores(): void {
    if (this.selectedTag) {
      this.StoreService.getStoresByTag(this.selectedTag).subscribe(
        stores => {
          this.stores = Object.values(stores);
        },
        error => {
          console.log('Error:', error);
        }
      );
    } else {
      this.StoreService.getStores().subscribe(
        stores => {
          this.stores = Object.values(stores);
        },
        error => {
          console.log('Error:', error);
        }
      );
    }
  }

  clearFilter(){
    this.StoreService.getStores().subscribe(
      stores=>{
        this.stores= Object.values(stores);
      }
    )
  }
  onTagChange(tag: string): void {
    this.selectedTag = tag;
    this.filterStores();
  }

  fliterAsian(){
    this.onTagChange("Asian");
  }
  fliterCrepe(){
    this.onTagChange("Crepe");

  }
  fliterOriental(){
    this.onTagChange("Oriental");

  }
  fliterChicken(){
    this.onTagChange("Fried Chicken");

  }
  fliterBurger(){
    this.onTagChange("Burger");

  }
  fliterPizza(){
    this.onTagChange("Pizza");

  }
}
