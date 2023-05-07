import { Component } from '@angular/core';
import { StoresService } from '../services/stores.service';
import { store } from '../shared/Store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  stores:store[] =[]
  constructor(private StoreService:StoresService){}

  ngOnInit():void{
    this.stores= this.StoreService.getAll();
  }
}
