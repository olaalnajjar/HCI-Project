import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantManagerComponent } from './restaurant-manager/restaurant-manager.component';
import { RestaurantManager2Component } from './restaurant-manager2/restaurant-manager2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantManagerComponent,
    RestaurantManager2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
