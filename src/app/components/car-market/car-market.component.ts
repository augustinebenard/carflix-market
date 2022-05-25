import { NgxSpinnerService } from 'ngx-spinner';
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
  // carRanks: any = [
  //   { rank: "Top" },
  //   { rank: "Trending" },
  //   { rank: "Latest" }

  // ]
  topCarList: any;
  latestCarList: any;
  trendingCarList: any;
  filterRank: any = [
    { rank: "Top" },
    { rank: "Trending" },
    { rank: "Latest" }
  ]
  selectedRank: any
  displayCarPopUp!: boolean;
  rank:any='';
  carRankList:any
  constructor(private router: Router, private spinner: NgxSpinnerService, private service: ApiService) { }

  ngOnInit(): void {

    this.getTopCars()
    this.getLatestCars()
    this.getTrendingCars()
    this.getCars()

  }

  getCars() {
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
      this.carList = res.data
      this.loading = false
    })
  }

  viewCar(car: any) {
    this.router.navigate(['car-detail/' + car.carId])


  }
  gotoHome() {
    this.router.navigate([''])
  }

  getTopCars() {
    this.spinner.show()
    this.service.filterCarByRanks("Top").subscribe((res: any) => {
      // console.log(res);
      this.spinner.hide()
      this.topCarList = res.data
    }, (error: any) => {
      console.log(error);
      this.spinner.hide()
    }
    )
  }

  getLatestCars() {
    this.spinner.show()
    this.service.filterCarByRanks("Latest").subscribe((res: any) => {
      // console.log(res);
      this.spinner.hide()
      this.latestCarList = res.data
    }, (error: any) => {
      console.log(error);
      this.spinner.hide()
    }
    )
  }

  getTrendingCars() {
    this.spinner.show()
    this.service.filterCarByRanks("Trending").subscribe((res: any) => {
      // console.log(res);
      this.spinner.hide()
      this.trendingCarList = res.data
    }, (error: any) => {
      console.log(error);
      this.spinner.hide()
    }
    )
  }

  showMoreTopCars() {
    this.rank="Top"
    this.displayCarPopUp = true;
    this.getTopCars()
    this.carRankList=this.topCarList
  }
  showMoreTrendingCars() {
    this.rank="Trending"
    this.displayCarPopUp = true;
    this.getTrendingCars()
    this.carRankList=this.trendingCarList
  }
  showMoreLatestCars() {
    this.rank="Latest"
    this.displayCarPopUp = true;
    this.getLatestCars()
    this.carRankList=this.latestCarList
  }
  // getCarsByRank() {

  //   if (this.carRanks.rank == "Top") {
  //     this.service.filterCarByRanks("Top").subscribe((res: any) => {
  //       console.log(res);
  //     }, (error: any) => {
  //       console.log(error);
  //     }
  //     )
  //   }

  //   else if (this.carRanks.rank == "Latest") {
  //     this.service.filterCarByRanks("Latest").subscribe((res: any) => {
  //       console.log(res);
  //     }, (error: any) => {
  //       console.log(error);
  //     }
  //     )
  //   }

  //   else if (this.carRanks.rank == "Top") {
  //     this.service.filterCarByRanks("Top").subscribe((res: any) => {
  //       console.log(res);
  //     }, (error: any) => {
  //       console.log(error);
  //     }
  //     )
  //   }

  //   if (this.carRanks.rank == "Trending") {
  //     this.service.filterCarByRanks("Trending").subscribe((res: any) => {
  //       console.log(res);
  //     }, (error: any) => {
  //       console.log(error);
  //     }
  //     )
  //   }
  // }





}
