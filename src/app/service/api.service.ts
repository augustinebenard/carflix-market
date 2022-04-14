import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient) { }


getTopBrandCars(){
  return this.http.get(`${this.baseUrl}/product/car/filter`)
}

filterCarTopCars(filter:any):any{
  return this.http.get(`${this.baseUrl}/product/car/filter?filterType=${filter}`)
}

submitQuestionnaire(data:any){
  return this.http.post(`${this.baseUrl}/supports/questionnaire`,data)
}



}
