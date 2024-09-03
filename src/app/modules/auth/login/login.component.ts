import { Component } from '@angular/core';
import { ButtonTypeE } from 'src/app/shared/enums/button-type.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  ButtonTypeE=ButtonTypeE
}
