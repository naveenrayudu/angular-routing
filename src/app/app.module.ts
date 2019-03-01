import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserCreateComponent } from './Users/user-create/user-create.component';
import { UserEditComponent } from './Users/user-edit/user-edit.component';
import { UserComponent } from './Users/user/user.component';
import { ProductComponent } from './Products/product/product.component';
import { UserViewComponent } from './Users/user-view/user-view.component';
import { UserListComponent } from './Users/user-list/user-list.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthChildGuard } from './guards/auth-child.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { DeactivateGuard } from './guards/deactivate.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'users', canActivateChild: [AuthChildGuard], children: [
      {path: 'create', component: UserCreateComponent},
      {path: 'view', component: UserViewComponent},
      {path: 'edit', component: UserEditComponent, resolve: {user: ResolveGuard}, canDeactivate: [DeactivateGuard]},
      {path: '', component: UserListComponent}
    ]
  },

  {path: 'products', component: ProductComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserCreateComponent,
    UserEditComponent,
    UserComponent,
    ProductComponent,
    UserViewComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
