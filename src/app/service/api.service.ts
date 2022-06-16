import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }


  getCars() {
    return this.http.get(`${this.baseUrl}/product/car/database/list`)
  }
  getCarById(carId: any): any {
    return this.http.get(`${this.baseUrl}/product/car/database/retrieve?dbId=${carId}`)
  }

  filterCarTopCars(filter: any): any {
    return this.http.get(`${this.baseUrl}/product/car/filter?filterType=${filter}`)
  }

  filterCarByRanks(rank: any): any {
    return this.http.get(`${this.baseUrl}/product/car/database/rank?rank=${rank}`)
  }

  submitQuestionnaire(data: any) {
    return this.http.post(`${this.baseUrl}/supports/questionnaire`, data)
  }
  getInspectionService(): any {
    return this.http.get(`${this.baseUrl}/settings/inspection/list`)
  }

  createEmailReminder(data: any) {
    return this.http.post(`${this.baseUrl}/supports/reminder/create`, data)
  }

  submitInpectionRecord(data: any) {
    return this.http.post(`${this.baseUrl}/supports/inspection/create/v2`, data)
  }

  getQuestions() {
    return this.http.get(`${this.baseUrl}/product/car/database/list`)
  }

  getArticles() {
    return this.http.get(`${this.baseUrl}/supports/article/list/top`)
  }

  getArticleById(id: any) {
    return this.http.get(`${this.baseUrl}/supports/article/retrieve?article-id=${id}`)
  }
  filterRelatedArticles(term: any) {
    return this.http.get(`${this.baseUrl}/supports/article/filter?term=${term}`)
  }

}
