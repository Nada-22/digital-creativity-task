import { Component } from '@angular/core';
import { ButtonTypeE } from 'src/app/shared/enums/button-type.enum';
import { UserI } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  ButtonType=ButtonTypeE;
  users!:UserI[];
}
