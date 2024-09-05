import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonTypeE } from 'src/app/shared/enums/button-type.enum';
import { UserLoginI } from 'src/app/shared/interfaces/user.interface';
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

  ) {}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      field: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      type: ['admin'],
    })

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
      
      setTimeout(() => {
        this.toastService.showErrorToast('you already logged in');
      }, 500);
    }
  }

  onLogIn() {

    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    this.isLoading = true;
    this.authService.adminLogin(this.loginForm.value as UserLoginI).subscribe({
      next: (res: any) => {
        this.isLoading = false;

        if (res.status) {
          localStorage.setItem('token', JSON.stringify(res.data.token));
          let data = {
            name: res.data.name,
            image: res.data.image
          }
          localStorage.setItem('data', JSON.stringify(data));
          this.router.navigateByUrl('/home');
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
