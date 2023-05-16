import { Injectable } from '@angular/core';
import { Store } from 'src/app/shared/Store'; 
import { AngularFireDatabase } from '@angular/fire/compat/database';
import 'firebase/database'
import { Food } from 'src/app/shared/Models/Food';
@Injectable({
  providedIn: 'root'
})
export class StoresService {

  public _storesList: Store[] =[{
    id: 1,
    title: 'Pizza Hut',
    stars: 4.5,
    img_id: '/assets/Images/pizza hut.jpg'
  },
  {
    id: 2,
    title: 'Papa Johns',
    stars: 4.7,
    img_id: '/assets/Images/papa johns.png'
  },
  {
    id: 3,
    title: 'Mori Sushi',
    stars: 3.5,
    img_id: '/assets/Images/Mori-Sushi-.png'
  },
  {
    id: 4,
    title: 'McDonalds',
    stars: 3.3,
    img_id: '/assets/Images/mc.jpg'
  },
  {
    id: 5,
    title: 'Cookdoor',
    stars: 3.0,
    img_id: '/assets/Images/cookdoor.png'
  },
  {
    id: 6,
    title: 'Burger King',
    stars: 4.0,
    img_id: '/assets/Images/burgerking.jpg'
  },
  {
    id: 7,
    title: 'Starbucks',
    stars: 4.0,
    img_id: '/assets/Images/starbucks.jpg'
  },
  {
    id: 8,
    title: 'Subuway',
    stars: 4.0,
    img_id: '/assets/Images/subway.jpg'
  },
  {
    id: 9,
    title: 'Buffalo Burger',
    stars: 4.0,
    img_id: '/assets/Images/buffalo.png'
  }];
  
  constructor( private database: AngularFireDatabase) { 
    this.getStarted();
    this.database.object('Store');
    
  }
  
  getStoreByID(id: number):Store{
    return this.getAll().find(store => store.id == id)!;
  }

  getStoresFromDB(){
    return new Promise((resolve , reject)=>{
      this.database.list('Store').valueChanges().subscribe(value =>{
        resolve(value);
      });
    });
  }

  async getStarted(){
    var stores!: Store[];
    await this.getStoresFromDB().then(value =>{
      stores = value as Store[];
    });

    this._storesList = stores;
  }

  getAll():Store[]{
    return this._storesList;
    //   {
    //     id: 1,
    //     title: 'Pizza Hut',
    //     stars: 4.5,
    //     img_id: '/assets/Images/pizza hut.jpg'
    //   },
    //   {
    //     id: 2,
    //     title: 'Papa Johns',
    //     stars: 4.7,
    //     img_id: '/assets/Images/papa johns.png'
    //   },
    //   {
    //     id: 3,
    //     title: 'Mori Sushi',
    //     stars: 3.5,
    //     img_id: '/assets/Images/Mori-Sushi-.png'
    //   },
    //   {
    //     id: 4,
    //     title: 'McDonalds',
    //     stars: 3.3,
    //     img_id: '/assets/Images/mc.jpg'
    //   },
    //   {
    //     id: 5,
    //     title: 'Cookdoor',
    //     stars: 3.0,
    //     img_id: '/assets/Images/cookdoor.png'
    //   },
    //   {
    //     id: 6,
    //     title: 'Burger King',
    //     stars: 4.0,
    //     img_id: '/assets/Images/burgerking.jpg'
    //   },
    //   {
    //     id: 7,
    //     title: 'Starbucks',
    //     stars: 4.0,
    //     img_id: '/assets/Images/starbucks.jpg'
    //   },
    //   {
    //     id: 8,
    //     title: 'Subuway',
    //     stars: 4.0,
    //     img_id: '/assets/Images/subway.jpg'
    //   },
    //   {
    //     id: 9,
    //     title: 'Buffalo Burger',
    //     stars: 4.0,
    //     img_id: '/assets/Images/buffalo.png'
    //   }
    // ];
   
  }
}
