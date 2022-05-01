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
      id: 1,
      question: "pick all the car brands you like?",
      options: this.brandList,
      name:"carBrand",
      subQuestion:false,
      multiple: true
    },
    {
      id: 2,
      question: "Tell us your estimated Budget?",
      options: [
        { id: 1, label: '1m - 5m' },
        { id: 2, label: "2m - 5m" },
        { id: 3, label: "5m - 12m" },
        { id: 4, label: "10m - 20m" },
        { id: 5, label: "20m - 50m" },
        { id: 6, label: "50m+" }
      ],
      name:"estimatedBudget",
      subQuestion:false,
      multiple: false
    },

    {
      id: 3,
      question: "Give us a range of how old are you?",
      options: [
        { id: 1, label: '16 - 18' },
        { id: 2, label: "18 - 24" },
        { id: 3, label: "24 - 30" },
        { id: 4, label: "30 - 40" },
        { id: 5, label: "40+" },
      ],
      name:"ageRange",
      subQuestion:false,
      multiple: false
    },
    {
      id: 4,
      question: "How much do you plan to spend on fuel consumption weekly?",
      options: [
        { id: 1, label: "Less than ₦2,000" },
        { id: 2, label: "Less than ₦5,000" },
        { id: 3, label: "ALess than ₦10,000" },
      ],
      name:"spendOnFuel",
      subQuestion:false,
      multiple: false
    },
    {
      id: 5,
      question: "How many hours will you be driving daily?",
      options: [
        { id: 1, label: "Less than 2Hrs" },
        { id: 2, label: "Less than 6Hrs" },
        { id: 3, label: "Above 6Hrs" },
      ],
      name:"dailyDrivingHrs",
      subQuestion:false,
      multiple: false
    },
    {
      id: 6,
      question: "Are you married?",
      options: [
        {
          id: 1,
          label: 'Yes',
          subQuestion: "How many children?",
          name:"noOfChildren",
          options: [
            { id: 1, label: "Less than 3" },
            { id: 2, label: "Less than 5" },
            { id: 2, label: "Above 5" },
          ]
        },
        { id: 2, label: "No" },
      ],
      subQuestion:true,
      name:"maritalStatus",
      multiple: false
    },
    {
      id: 7,
      question: "How much do you plan on monthly maintainance?",
      options: [
        { id: 1, label: "Less than ₦10,000" },
        { id: 2, label: "Less than ₦20,000" },
        { id: 3, label: "₦25,000+" },
      ],
      name:"monthyMaintainanceCost",
      subQuestion:false,
      multiple: false
    },

    {
      id: 8,
      question: "Select the list car you are looking to buy?",
      options: [
        { id: 1, label: "NEW" },
        { id: 2, label: "Foreign Used" },
        { id: 3, label: "Nigerian Used" },
      ],
      name:"carToBuy",
      subQuestion:false,
      multiple: false
    },

    {
      id: 9,
      question: "ow many seats will you prefer?",
      options: [
        { id: 1, label: "2 Seats" },
        { id: 2, label: "5 Seats" },
        { id: 3, label: "8 Seats" },
      ],
      name:"noOfSeats",
      subQuestion:false,
      multiple: false
    },

    {
      id: 10,
      question: "Tell us the things you love in a car?",
      options: this.thingsYouLoveInCarList,
      name:"thingsYouLoveInCar",
      subQuestion:false,
      multiple: true
    },

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
    console.log(this.questionList);

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
