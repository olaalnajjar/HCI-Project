import { Component } from '@angular/core';
import { RestaurantService } from '../services/restaurant/restaurant.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuVisible = false;
  userType='';
  isManager=false;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getUserType().subscribe(
      (response) => {
        this.userType = response;
        console.log(this.userType);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
  

  showMenu() {
    this.isMenuVisible = true;
  }

  hideMenu() {
    this.isMenuVisible = false;
  }


  checkIsManager():boolean{
    if(this.userType=='manager'){
      return true;
    }else{
      return false;
    }
  }

}
