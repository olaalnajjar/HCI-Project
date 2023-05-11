import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StorePageComponent } from './store-page/store-page.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'store/:id', component:StorePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
