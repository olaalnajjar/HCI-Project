import { Component } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: any;
  confirmPassword: any;

  constructor(private authService: AuthService) {}

  onSubmit(username: any, confirmPassword: any) {
    this.authService.onSignup(this.username, this.confirmPassword);
  }
}
