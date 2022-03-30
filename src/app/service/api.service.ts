import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = environment.baseUrl + 'car';
  constructor(private http:HttpClient) { }


getTopBrandCars(){
  return this.http.get(`${this.baseUrl}/filter`)
}

filterCarTopCars(filter:any):any{
  return this.http.get(`${this.baseUrl}/filter?filterType=${filter}`)
}


}
