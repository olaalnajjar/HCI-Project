import { Component } from '@angular/core';
import { StoresService } from '../services/stores/stores.service';
import { Store } from '../shared/Store';
import { ActivatedRoute,Router } from '@angular/router';
import { SlideInterface } from '../slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public currentStoreId!:number;
  constructor(private StoreService:StoresService, private route: ActivatedRoute, private router: Router){}
  stores:Store[] =this.StoreService.getAll();

  ngOnInit():void{
    this.stores= this.StoreService.getAll();
  }
  slides: SlideInterface[] = [
    { url: '/assets/Images/dominos-pizza5190.jpg', title: 'dominos' },
    { url: '/assets/Images/papa johns.png', title: 'papa johns'},
    { url:'/assets/Images/pizza hut.jpg', title: 'pizza hut' }
  ];
}
