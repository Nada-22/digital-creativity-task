import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllUsers, selectUserError } from 'src/app/core/store/user/user.selectors';
import { ButtonTypeE } from 'src/app/shared/enums/button-type.enum';
import { UserI } from 'src/app/shared/interfaces/user.interface';
import * as UserActions from '../../../core/store/user/user.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  ButtonType=ButtonTypeE;
  users!:UserI[];

  users$: Observable<UserI[]> = this.store.select(selectAllUsers);

  constructor(private store: Store) {}

  ngOnInit() {

    this.store.dispatch(UserActions.loadUsers());
  }



  // addUser(user: UserI) {
  //   this.store.dispatch(UserActions.addUser({ user }));
  // }

  // updateUser(user: UserI) {
  //   this.store.dispatch(UserActions.updateUser({ user }));
  // }

  // deleteUser(id: number) {
  //   this.store.dispatch(UserActions.deleteUser({ id }));
  // }
}
