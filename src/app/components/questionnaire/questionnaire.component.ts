import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare const questionnaireStepper: any;
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  carBrand: any = []
  estimatedBudget: any
  ageRange: any
  spendOnFuel: any
  dailyDrivingHrs: any
  maritalStatus: any
  married: boolean = false
  noOfChildren: any
  monthyMaintainanceCost: any
  carToBuy: any
  noOfSeats: any
  thingsYouLoveInCar:any
  constructor(private router: Router) {


  }

  ngOnInit() {
    questionnaireStepper()


  }



  gotoTopMarket() {
    this.router.navigate(['top-car'])

  }


  scrollToTop() {
    window.scrollTo(500, 0);
  }
  estimatedBudgetToggle(e: any) {

  }

  ageToggle(e: any) {

  }
  spendOnFuelToggle(e: any) {

  }
  dailyDrivingHrsToggle(e: any) {

  }
  maritalStatusToggle(e: any) {
    if (this.maritalStatus === "Yes") {
      this.married = true
    } else {
      this.married = false
    }
  }

  noOfChildrenToggle(e: any) {

  }
  monthyMaintainanceCostToggle(e: any) {

  }
  carToBuyToggle(e: any) {

  }
  noOfSeatsToggle(e: any) {

  }

  submitResponse() {
    console.log(this.estimatedBudget)

  }
  goHome(){
    this.router.navigate([''])
  }


}
