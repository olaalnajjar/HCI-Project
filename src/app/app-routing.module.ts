import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StorePageComponent } from './store-page/store-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RestaurantManagerComponent } from './restaurant-manager/restaurant-manager.component';
import { RestaurantManager2Component } from './restaurant-manager2/restaurant-manager2.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'store/:id', component:StorePageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'restaurant-manager', component: RestaurantManagerComponent},
  {path:'restaurant-manager2', component: RestaurantManager2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
