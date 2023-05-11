import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/Store';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from '../services/stores/stores.service';
@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  store!: Store;
  constructor(private activatedRoute:ActivatedRoute, private StoreService:StoresService){
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.store = StoreService.getStoreByID(params['id']);
    })
}
ngOnInit():void{}
}
