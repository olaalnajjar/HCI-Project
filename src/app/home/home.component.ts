import { Component } from '@angular/core';
import { StoresService } from '../services/stores/stores.service';
import { Store } from '../shared/Store';
import { ActivatedRoute,Router } from '@angular/router';
import { SlideInterface } from '../slide.interface';
import { Observable } from 'rxjs';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public currentStoreId!:number;
  constructor(private StoreService:StoresService, private route: ActivatedRoute, private router: Router,private foodService: FoodService){}
  stores!: Store[];
  


  slides: SlideInterface[] = [
    { url: '/assets/Images/dominos-pizza5190.jpg', title: 'dominos' },
    { url: '/assets/Images/mc.jpg', title: 'mcdonalds'},
    { url:'/assets/Images/pizza hut.jpg', title: 'pizza hut' },
    { url:'/assets/Images/starbucks.jpg', title: 'starbucks' }
  ];
  
  filtered_stors!:Store[]

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
    console.log(title);
    
  }

  filterStores(): void {
    if (this.selectedTag) {
      this.StoreService.getStoresByTag(this.selectedTag).subscribe(
        stores => {
          this.stores = stores;
        },
        error => {
          console.log('Error:', error);
        }
      );
    } else {
      this.StoreService.getStores().subscribe(
        stores => {
          this.stores = stores;
        },
        error => {
          console.log('Error:', error);
        }
      );
    }
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
