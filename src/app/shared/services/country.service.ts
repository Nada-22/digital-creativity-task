import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  API_URL = environment.API_URL
  constructor(private http: HttpClient) { }


  getAllCountries():Observable<any> {
   
    let params = new HttpParams().set('return_all', 1);
    return this.http.get(this.API_URL + `/countries`, { params: params });
  }
}
