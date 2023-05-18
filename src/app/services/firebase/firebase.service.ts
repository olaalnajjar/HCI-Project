import { Injectable } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth) { }
  async signin(email: any, password : any){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then((res: { user: any; })=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  async signup(username: any, confirmPassword : any){
    await this.firebaseAuth.createUserWithEmailAndPassword(username, confirmPassword)
    .then((res: { user: any; })=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }}
