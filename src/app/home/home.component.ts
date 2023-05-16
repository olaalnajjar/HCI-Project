import { Component } from '@angular/core';
import { StoresService } from '../services/stores/stores.service';
import { Store } from '../shared/Store';
import { ActivatedRoute,Router } from '@angular/router';

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
  
}
