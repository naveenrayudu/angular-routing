import { Component, OnInit } from '@angular/core';
import { IUser } from '../../common/IUser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user: IUser;
  count: Number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParamMap.subscribe(t => {
      const id = t.get('id');
      const userString = localStorage.getItem('users');
      if (userString) {
        const users: IUser[] = JSON.parse(userString);
        this.user = users.find(x => x.id === +id);
        this.count = users.length;
      }
    });
  }

  ngOnInit() {
  }

  navigateToUser(userId) {
    this.router.navigate(['/users/view'], {queryParams: {
      id: userId
    }});
  }
}
