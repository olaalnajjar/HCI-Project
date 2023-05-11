import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoresService } from './services/stores/stores.service';
import { FormsModule } from '@angular/forms';
import { StorePageComponent } from './store-page/store-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StorePageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [StoresService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
