import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  email: String = '';
  fullname: String = '';
  age: Number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveUser() {
    const usersString = localStorage.getItem('users');
    let users: {}[] = [];
    if (usersString) {
      users = JSON.parse(usersString);
    }

    const idToSet = users.length + 1;
    users.push({
      id: idToSet,
      email: this.email,
      fullname: this.fullname,
      age: this.age
    });

    localStorage.setItem('users', JSON.stringify(users));
    this.email = '';
    this.fullname = '';
    this.age = undefined;

    this.router.navigate(['/users']);
  }

}
