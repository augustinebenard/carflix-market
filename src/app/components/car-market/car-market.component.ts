import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-car-market',
  templateUrl: './car-market.component.html',
  styleUrls: ['./car-market.component.css']
})
export class CarMarketComponent implements OnInit {
  loading!: boolean;

  cars: any = [];
  carList: any;
  filterText: any;

  constructor(private router: Router, private service: ApiService) { }

  ngOnInit(): void {


    this.getTopCars()
  }

  getTopCars() {
    this.loading = true
    this.service.getCars().subscribe((res: any) => {
      this.carList = res.data
      this.loading = false
    }, (error: any) => {
      console.log(error);
    }

    )
  }

  filterCarByBrand() {
    this.loading = true
    this.service.filterCarTopCars(this.filterText).subscribe((res: any) => {
      // console.log(res);
      this.carList=res.data
      this.loading=false
    })
  }

  viewCar() {

  }
  gotoHome() {
    this.router.navigate([''])
  }



}
