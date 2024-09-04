import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLoginI } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = environment.API_URL
  constructor(private http: HttpClient,private router:Router) { }


  adminLogin(body: UserLoginI) {
    return this.http.post(this.API_URL + '/auth/admin-login', body);
  }

  storeAdminToken() {

  }
  isLoggedIn() {
    return JSON.parse(localStorage.getItem('token') as string) !== null;
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);

  }
  getUserData(){
    return JSON.parse(localStorage.getItem('data') as string) || null
  }
}
