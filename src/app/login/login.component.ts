import { Component } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: any;
  password: any;

  constructor(private authService: AuthService) {}

  onSubmit(email: any, password: any) {
    this.authService.onLogin(this.email, this.password);
  }

}
