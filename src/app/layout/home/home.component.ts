import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: any = [];
  carList!: any
  submitted!: boolean;
  carDialog!: boolean;
  selectedCars!: any;
  loading: boolean = true;
  idk!: string;

  constructor(private service: ApiService, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {

    // this.cars =

    this.getTopCars()
  }

  getTopCars() {
    this.loading = true
    this.service.getTopBrandCars().subscribe((res: any) => {
      this.carList = res.data
      this.loading = false

    },(error:any)=>{
      console.log(error);

    }

    )
  }

  gotoQuestionaire() {
    this.router.navigate(['questionnaire'])
  }
  gotoCarmarket() {
    this.router.navigate(['carMarket'])
  }
  viewCar() {

  }


  hireInspector() {
    this.router.navigate(['hireInspector'])
  }
}
