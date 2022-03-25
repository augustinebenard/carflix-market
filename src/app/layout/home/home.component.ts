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
  submitted!: boolean;
  carDialog!: boolean;
  selectedCars!: any;
  loading: boolean = true;
  idk!: string;

  constructor(private servuice: ApiService, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {

    this.cars = [
      {

        "carName": "Honda Civic",
        "year": 2015,
        "minPrice":250000,
        "maxPrice":350000,
        "sketch": 'car1.jpg'
      },
      {

        "carName": "Lexus",
        "market": "Product Description",
        "year": 2017,
        "sketch": 'car2.png',
        "minPrice":270000,
        "maxPrice":370000,
      },
      {

        "carName": "Toyota Camry",
        "market": "Product Description",
        "year": 2016,
        "minPrice":770000,
        "maxPrice":900000,
        "sketch": 'car3.jpg'
      },
      {

        "carName": "Opel",
        "description": "Product Description",
        "market": "blue-t-shirt.jpg",
        "year": 2013,
        "minPrice":300000,
        "maxPrice":370000,
        "sketch": 'car4.jpg'
      },
      {

        "carName": "Range Rover",
        "market": "Product Description",
        "year": 2022,
        "minPrice":400000,
        "maxPrice":500000,
        "sketch": 'car5.jpg'
      },
      {

        "carName": "Toyota Haris",
        "market": "Product Description",
        "year": 2014,
        "minPrice":570000,
        "maxPrice":970000,
        "sketch": 'car6.png'

      },
      {

        "carName": "Land Rover",
        "market": "Product Description",
        "year": 2007,
        "minPrice":210000,
        "maxPrice":300000,
        "sketch": 'car7.jpg'
      },
      {

        "carName": "Honda Accord",
        "market": "Product Description",
        "year": 2009,
        "minPrice":270000,
        "maxPrice":370000,
        "sketch": 'car1.jpg'

      },
      {

        "carName": "Benz",
        "market": "Product Description",
        "year": 2015,
        "minPrice":300000,
        "maxPrice":370000,
        "sketch": 'car8.jpg'
      },
      {

        "carName": "Volvo",
        "market": "Product Description",
        "year": 2013,
        "minPrice":240000,
        "maxPrice":270000,
        "sketch": 'car9.png'
      }
    ]
    this.loading = false
  }


  gotoQuestionaire() {
    this.router.navigate(['questionaire'])
  }
  viewCar() {

  }
}
