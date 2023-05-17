import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantManagerComponent } from './restaurant-manager/restaurant-manager.component';
import { RestaurantManager2Component } from './restaurant-manager2/restaurant-manager2.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { StorePageComponent } from './store-page/store-page.component';
import { FormsModule } from '@angular/forms';
import { FoodPageComponent } from './food-page/food-page.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';
import{AngularFireModule} from '@angular/fire/compat'; 
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { StoresService } from './services/stores/stores.service';
import { FoodService } from './services/food/food.service';
import { CartService } from './services/cart/cart.service';
import{HttpClientModule} from '@angular/common/http'
import { SliderComponent } from './slider/slider.component';
import {NgImageSliderModule } from 'ng-image-slider';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantManagerComponent,
    RestaurantManager2Component,
    CartPageComponent,
    HomeComponent,
    StorePageComponent,
    FoodPageComponent,
    SliderComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    NgImageSliderModule,

  ],
  providers: [StoresService,
    FoodService,
    CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCOn76SLic63lklxqvipD5H-FBZN6XrvH4",
//   authDomain: "hci-project-e4f9b.firebaseapp.com",
//   projectId: "hci-project-e4f9b",
//   storageBucket: "hci-project-e4f9b.appspot.com",
//   messagingSenderId: "144963466951",
//   appId: "1:144963466951:web:fcc5d46b7d9ce9bd8730e2",
//   measurementId: "G-QS23YC7WPE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);