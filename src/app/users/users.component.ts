import { Component } from '@angular/core';
import { User } from '../shared/Models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
    user_list: User[] = [
    {image:"assets/Images/images.jpeg",firstName: 'Ola', lastName: 'Elnaggar', age: 23, city: 'Fifth Settlement' , phone: '0123456789'},
    {image:"assets/Images/images.jpeg",firstName: 'Ingy', lastName: 'Mysara', age: 23, city: 'Nasr City' , phone: '0123456789'},
    {image:"assets/Images/images.jpeg",firstName: 'Madonna', lastName: 'Bassem', age: 23, city: 'Masr Elgedeeda', phone: '0123456789' },
    {image:"assets/Images/download.jpeg",firstName: 'Mohamed', lastName: 'Ashraf', age: 32, city: 'Nasr City', phone: '0123456789' },
    {image:"assets/Images/download.jpeg",firstName: 'Ahmad', lastName: 'Hesham', age: 24, city: 'El-Sheikh Zayed' , phone: '0123456789'},
    {image:"assets/Images/images.jpeg",firstName: 'Heba', lastName: 'Mohamed', age: 33, city: 'Fifth Settlement' , phone: '0123456789'},
    {image:"assets/Images/images.jpeg",firstName: 'Reem', lastName: 'Khaled', age: 22, city: 'Fifth Settlement' , phone: '0123456789'}
    ];

    selectedUser!: User;
    onSelect(user: User): void {
      this.selectedUser = user;
    }
  
    constructor() { }
  
    ngOnInit() {
    }
}
