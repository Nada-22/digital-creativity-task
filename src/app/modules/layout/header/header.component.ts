import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonTypeE } from 'src/app/shared/enums/button-type.enum';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ButtonType=ButtonTypeE;
  items:MenuItem[] = [
    {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
    },
    {
        label: 'Log out',
        icon: 'pi pi-fw pi-sign-out',
        command:()=>{

          this.OnLogout();
        }
    }
];

constructor(private authService:AuthService){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getUserData();
}
OnLogout(){
  this.authService.logOut();
}
getUserData(){
  
  return this.authService.getUserData();
}
}
