import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/Store';
import { ActivatedRoute ,Router} from '@angular/router';
import { StoresService } from '../services/stores/stores.service';
@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  store: any;
  constructor(
    private route: ActivatedRoute,
    private storeService: StoresService
  ) { }
  ngOnInit() {
    this.getStore();
  }
  getStore(): void {
      this.storeService.getStoreByTitle().subscribe(store => {
        this.store = store;
  });
}

}
