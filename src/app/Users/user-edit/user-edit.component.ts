import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../common/IUser';
import { ICantDeactivate } from '../../common/ICanDeactivate';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, ICantDeactivate {

  user: IUser;
  originalUser: IUser;
  users: IUser[] = [];


  userid: Number = -1;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe(t => {
      if (t) {
        this.user = t['user'];
        this.originalUser = t['user'];
        this.userid = this.user.id;
      }
    });
  }

  ngOnInit() {

  }

  canDeactivate(): boolean | Observable<boolean> | Promise<true> {
    return this.originalUser.email === this.user.email && this.user.fullname === this.originalUser.fullname
      && this.originalUser.age === this.user.age;
  }

  updateUser() {
    const newUsers = this.users.filter(t => t.id !== this.userid);
    newUsers.push(this.user);
    localStorage.setItem('users', JSON.stringify(newUsers));

    this.originalUser.email = this.user.email;
    this.originalUser.fullname = this.user.fullname;
    this.originalUser.age = this.user.age;


    this.router.navigate(['/users']);
  }

}

