import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserI, UserLoginI } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = environment.API_URL
  constructor(private http: HttpClient) { }


  getAllUsers():Observable<any> {
    //http query params
    let params = new HttpParams().set('return_all', 1);
    return this.http.get(this.API_URL + `/users`, { params: params });
  }

  getUserByID(id: number): Observable<any> {

    return this.http.get(this.API_URL + `/users/${id}`);
  }

  createUser(body: UserI): Observable<any> {
    return this.http.post(this.API_URL + `/users`, body);
  }

  updateUser(id: number, body: UserI): Observable<any> {
    return this.http.put(this.API_URL + `/users/${id}`, body);
  }
  toggleUserActivation(id: number): Observable<any> {
    return this.http.get(this.API_URL + `/users/${id}/activation`);
  }
}
