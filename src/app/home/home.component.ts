import { Component } from '@angular/core';
import { StoresService } from '../services/stores/stores.service';
import { Store } from '../shared/Store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  stores:Store[] =[]
  constructor(private StoreService:StoresService, private route: ActivatedRoute){}

  ngOnInit():void{
    this.stores= this.StoreService.getAll();
  }
}
