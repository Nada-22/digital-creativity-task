import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonTypeE } from 'src/app/shared/enums/button-type.enum';
import { UserLoginI } from 'src/app/shared/interfaces/user-login.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  ButtonTypeE = ButtonTypeE;
  isSubmitted = false;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router

  ) {
  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      field: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      type: ['admin'],
    })

  }

  onLogIn() {

    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    this.isLoading = true;
    this.authService.adminLogin(this.loginForm.value as UserLoginI).subscribe({
      next: (res: any) => {
        console.log(res);
        this.isLoading = false;

        if (res.status) {
          localStorage.setItem('token', JSON.stringify(res.data.token));
          this.router.navigateByUrl('/home')
        }
      }, error: (err) => {
       
        
        if (err.error.message) {
          this.toastService.showErrorToast(err.error.message);
        }
        this.isLoading = false;
      }
    })

  }
}
