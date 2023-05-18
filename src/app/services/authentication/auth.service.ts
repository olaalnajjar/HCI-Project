import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  isSignedIn = false
  constructor(public firebaseService : FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(username:string,confirmPassword:string){
    await this.firebaseService.signup(username,confirmPassword)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onLogin(email:any,password:any){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false
  }
}
