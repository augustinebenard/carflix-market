import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
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
  thingsYouLoveInCar: any
  form!: FormGroup
  questionnaireResponse!: {};
  brandList: Array<any> = [
    { id: 1, label: 'Porche', isChecked: false },
    { id: 2, label: 'Kia', isChecked: false },
    { id: 3, label: 'Tesla', isChecked: false },
    { id: 4, label: 'Mazda', isChecked: false },
    { id: 5, label: 'Toyota', isChecked: false },
    { id: 6, label: 'Honda', isChecked: false },
    { id: 7, label: 'Jaguar', isChecked: false },
    { id: 8, label: 'Mitsubishi', isChecked: false },
    { id: 9, label: 'Volvo', isChecked: false },
    { id: 10, label: 'Lexus', isChecked: false },
    { id: 11, label: 'Peugeot', isChecked: false },
    { id: 12, label: 'Skoda', isChecked: false },
    { id: 13, label: 'Mercedes', isChecked: false },
    { id: 14, label: 'Suzuki', isChecked: false },
    { id: 15, label: 'Hyundai', isChecked: false },
  ];
  thingsYouLoveInCarList: Array<any> = [
    { id: 1, label: 'Fast' },
    { id: 2, label: 'Luxury' },
    { id: 3, label: 'Neat' },
    { id: 4, label: 'Simple' },
    { id: 5, label: 'Flashy' },
    { id: 6, label: 'Big Tires' },
    { id: 7, label: 'SUV' },
    { id: 8, label: 'Sedan' },
    { id: 9, label: 'Pandenomic Roof' },
    { id: 10, label: 'Sensors' },
    { id: 11, label: 'Touch Start' },
    { id: 12, label: 'Thumb Start' },




  ]
  selectedItemsList = [];
  checkedIDs: any = [];
  parentSelector!: boolean;
  copyBrandList!: [];
  submitted: boolean = false
  questionList = [
    {

    }
  ]


  constructor(private router: Router, private spinner: NgxSpinnerService, private service: ApiService, private toastr: ToastrService, private fb: FormBuilder) {
    this.form = this.fb.group({
      estimatedBudget: ['', [Validators.required]],
      ageRange: ['', [Validators.required]],
      spendOnFuel: ['', [Validators.required]],
      dailyDrivingHrs: ['', [Validators.required]],
      maritalStatus: ['', [Validators.required]],
      noOfChildren: ['', [Validators.required]],
      monthyMaintainanceCost: ['', [Validators.required]],
      carToBuy: ['', [Validators.required]],
      noOfSeats: ['', [Validators.required]],
      respondentName: ['', [Validators.required]],
      respondentContactType: ['Select Contact Type', [Validators.required]],
      respondentContact: ['', [Validators.required]],
      respondentAddress: ['', [Validators.required]],
      thingsYouLoveInCar: new FormControl([], [Validators.required]),
      carBrand: new FormControl([], [Validators.required]),

    })

  }

  ngOnInit() {
    questionnaireStepper()

  }
  get fn() {
    return this.form.controls;
  }

  onBrandSelect(e: any) {
    if (e.target.checked) {
      this.form.value.carBrand.push(e.target.value);
      return;
    }
    if (!e.target.checked) {
      const index = this.form.value.carBrand.indexOf(e.target.value);
      if (index > -1) {
        this.form.value.carBrand.splice(index, 1);
        return
      }

    }


  }

  onThingYouLoveSelect(e: any) {
    if (e.target.checked) {
      this.form.value.thingsYouLoveInCar.push(e.target.value);
      return;
    }
    if (!e.target.checked) {
      const index = this.form.value.thingsYouLoveInCar.indexOf(e.target.value);
      if (index > -1) {
        this.form.value.thingsYouLoveInCar.splice(index, 1);
        return
      }

    }
  }

  submitQuestionnaires() {
    this.spinner.show()
    console.log(this.form.value);
    this.service.submitQuestionnaire(this.form.value).subscribe((res: any) => {
      console.log(res);
      this.spinner.hide()
      if (res.message == "Success") {
        this.submitted = true
        this.toastr.success('', "Your data is submitted successfully!")
      }
      else {
        this.toastr.error('', res.message)
      }

    }, (error: any) => {
      this.spinner.hide()
      console.log(error);

    }

    )

  }


  gotoTopMarket() {
    this.router.navigate(['top-car'])

  }


  maritalStatusToggle(e: any) {

    if (e.target.value === "Yes") {
      this.married = true
    } else {
      this.married = false
    }
  }

  goHome() {
    this.router.navigate([''])
  }

  getQuestions(){
    this.service.getQuestions().subscribe((res:any)=>{
      console.log(res);

    })
  }


}
