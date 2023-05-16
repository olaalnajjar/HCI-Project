import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/Models/Food';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import 'firebase/database'
import { StoresService } from '../stores/stores.service';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor( private database: AngularFireDatabase,private storeService:StoresService) { 
    this.database.object('Store');
    //this.getStarted();
  }
  public _foodList: Food[]=[
     { Description: "Chow mein is a traditional Chinese dish made with egg noodles and stir-fried veggies.",
      Image: "https://firebasestorage.googleapis.com/v0/b/wagba-6d791.appspot.com/o/chow_mein.jpg?alt=media&token=28a4e957-2392-4537-8bbb-6a3c593b1ed5",
      Price: 40,
      Status: "https://firebasestorage.googleapis.com/v0/b/wagba-6d791.appspot.com/o/checked.png?alt=media&token=009c5792-16b7-4ae0-9545-b63e3088c3bc",
      dish_name: "Chow Mein"
    },
   {
      Description: "Fried rice is cooked rice that has been stir-fried in a wok or a frying pan and mixed with eggs, vegetables, seafood, or meat.",
      Image: "https://firebasestorage.googleapis.com/v0/b/wagba-6d791.appspot.com/o/fried_rice.jpg?alt=media&token=1011c5a2-0a9d-4f9c-9893-e4bc00c52776",
      Price: 50,
      Status: "https://firebasestorage.googleapis.com/v0/b/wagba-6d791.appspot.com/o/delete.png?alt=media&token=f9b95472-f875-48b3-a4ff-ffdd45b4ca5a",
      dish_name: "Fried Rice"
    }, {
      Description: "Sweet and Sour Chicken with crispy chicken, pineapple, and bellpeppers, with Chinese style noodles with vegetables.",
      Image: "https://firebasestorage.googleapis.com/v0/b/wagba-6d791.appspot.com/o/sweet%20and%20sour.jpg?alt=media&token=77cc1dbf-faec-48f2-a01b-5d55d04527dd",
      Price: 60,
      Status: "https://firebasestorage.googleapis.com/v0/b/wagba-6d791.appspot.com/o/checked.png?alt=media&token=009c5792-16b7-4ae0-9545-b63e3088c3bc",
      dish_name: "Sweet & Sour "
    },
    {
      Description: "Szechuan chicken is a spicy stir fry made with chicken and vegetables, all tossed in a sweet and savory sauce.",
      Image: "https://firebasestorage.googleapis.com/v0/b/wagba-6d791.appspot.com/o/Szechuan-Chicken-Square-FS-18.jpg?alt=media&token=12f86a37-c7cd-464f-8993-f735d204d543",
      Price: 60,
      Status: "https://firebasestorage.googleapis.com/v0/b/wagba-6d791.appspot.com/o/checked.png?alt=media&token=009c5792-16b7-4ae0-9545-b63e3088c3bc",
      dish_name: "Szechuan Chicken"
    
  
}];

  currentStoreId!:number;
  id!:string;
  getFoodByName(dish_name: string): Food{
    return this.getAll().find(food => food.dish_name == dish_name)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.dish_name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getFoodsFromDB(){
    return new Promise((resolve , reject)=>{
      this.database.list('Dishes/')
      .valueChanges().subscribe(value =>{
        resolve(value);
        console.log(value);
      });
    });
  }
  setCurrentStoreId(id:number){
    this.currentStoreId=id;
    this.id=id.toString();
    console.log(this.currentStoreId);
  }
  
  async getStarted(){
    var foods!: Food[];
    await this.getFoodsFromDB().then(value =>{
      foods = value as Food[];
    });

    this._foodList = foods;
    console.log(this._foodList);

  }

  getAll(): Food[] {
    console.log(this._foodList);
    
    return this._foodList;
  }
}