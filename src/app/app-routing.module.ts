import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StorePageComponent } from './store-page/store-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'store/:id', component:StorePageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'new-account', component: SignUpComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
