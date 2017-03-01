import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'app works!';
  // Link to our api, pointing to localhost

  // Declare empty list of people
  users: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.usersService.getAllUsers().subscribe(users =>{
      this.users = users;
    })
  }
}
