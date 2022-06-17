import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  

  articles!: any;
  cars: any = [];
  topCarList:any
  submitted!: boolean;
  carDialog!: boolean;
  selectedCars!: any;
  loading: boolean = true;
  reminderEmail: any;
  topArticleList: any;


  constructor(private service: ApiService,private spinner:NgxSpinnerService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {

    // this.cars =

this.getTopArticles()

    this.getTopCars()
    // console.log(this.topCarList);
  }

  getTopCars() {
    this.loading = true
    this.service.getCars().subscribe((res: any) => {
      // console.log(res);

      this.topCarList=res.data.slice(0, 10)
      this.loading = false

    }, (error: any) => {
      // console.log(error);

    }

    )
  }

  gotoQuestionaire() {
    this.router.navigate(['questionnaire'])
  }
  gotoCarmarket() {
    this.router.navigate(['carMarket'])
  }
  viewCar(car:any) {
    // console.log(car);
    this.router.navigate(['car-detail/'+car.carId])


  }


  hireInspector() {
    this.router.navigate(['hireInspector'])
  }

  createReminder() {
    this.spinner.show()
    var obj = {
      email: this.reminderEmail
    }
    this.service.createEmailReminder(obj).subscribe((res: any) => {
      // console.log(res);
      this.spinner.hide()
      if (res.message == "Success") {

        this.toastr.success('', "Email reminder for " + this.reminderEmail + " was created successfully")
        this.reminderEmail=""
      }
      else{
        this.toastr.error('',res.message)
      }
    })
  }


  viewArticle(id: number): void {
    this.router.navigate(['view-article', id]);
  }

  getTopArticles(){
    this.spinner.show()
    this.service.getArticles().subscribe((res:any)=>{
      this.spinner.hide()
      this.topArticleList=res.data
      // console.log(this.topArticleList);
      
  
    }, (error: any) => {
      // console.log(error);
      this.spinner.hide()
    })
  }
}
