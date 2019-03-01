import { Component, OnInit } from '@angular/core';
import { IUser } from '../../common/IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];
  constructor() { }

  ngOnInit() {
    const usersString = localStorage.getItem('users');
    if (usersString) {
      this.users = JSON.parse(usersString);
    }
  }

}
