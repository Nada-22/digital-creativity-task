import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonTypeE } from 'src/app/shared/enums/button-type.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  ButtonTypeE = ButtonTypeE;
  isSubmitted=false;
  isLoading=false;
  constructor(private fb:FormBuilder) { 
  }

  ngOnInit(): void {
   
    this.loginForm = this.fb.group({
      field: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    })
    
  }
  
  onLogIn(){

    this.isSubmitted=true;
    console.log(this.loginForm.value);
    
  }
}
