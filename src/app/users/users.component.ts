import { Component } from '@angular/core';
import { User } from '../shared/Models/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  
    users: any;
    selectedUser!: User;
    onSelect(user: User): void {
      this.selectedUser = user;
    }
  
    constructor(private userService: UserService) { }

    getUsers(): void {
      this.userService.getUsers().subscribe(
        users => {
          this.users = Object.values(users);
        },
        error => {
          console.log('Error:', error);
        }
      );
    }
  
    ngOnInit() {
      this.getUsers();
    }
}
