import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLoginI } from '../interfaces/user-login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL=environment.API_URL
  constructor(private http:HttpClient) { }


  adminLogin(body:UserLoginI) {
    return this.http.post( this.API_URL + '/auth/admin-login',body);
  }

  storeAdminToken(){

  }
  isLoggedIn(){
    return JSON.parse(localStorage.getItem('token') as string) !== null;
  }
}
