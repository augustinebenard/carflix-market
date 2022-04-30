import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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
  carList: any =[]
  topCarList:any
  submitted!: boolean;
  carDialog!: boolean;
  selectedCars!: any;
  loading: boolean = true;
  reminderEmail: any;

  constructor(private service: ApiService,private spinner:NgxSpinnerService, private toastr: ToastrService, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {

    // this.cars =



    this.getTopCars()
    console.log(this.topCarList);
  }

  getTopCars() {
    this.loading = true
    this.service.getCars().subscribe((res: any) => {
      console.log(res);

      this.carList = res.data
      this.topCarList=res.data.slice(0, 10)
      this.loading = false

    }, (error: any) => {
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

  createReminder() {
    this.spinner.show()
    var obj = {
      email: this.reminderEmail
    }
    this.service.createEmailReminder(obj).subscribe((res: any) => {
      console.log(res);
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
}
