import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hire-inspector',
  templateUrl: './hire-inspector.component.html',
  styleUrls: ['./hire-inspector.component.css']
})
export class HireInspectorComponent implements OnInit {
  date!: Date
  selectedServices!: any[];
  listOfServices!: any[];

  whatsappStatus: boolean = false
  stateOptions!: any[];
  hireForm: boolean = false;
  form!: FormGroup
  constructor(private service: ApiService, private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.form = this.fb.group({
      date: ['', [Validators.required]],
      carLocation: ['', [Validators.required]],
      inspectionService: new FormControl([], [Validators.required]),
      extraNote: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      whatsappContact: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })

    this.getInpectionService()
  }

  getInpectionService() {
    this.service.getInspectionService().subscribe((res: any) => {
      console.log(res);
      this.listOfServices = res.data

    }, (error: any) => {
      console.log(error);

    }

    )
  }

  whatsappStatusToggle() {
    if (this.whatsappStatus == true) {

      this.form.get('whatsappContact')?.setValue(this.form.value.phone)
    }
    if (this.whatsappStatus == false) {


    }

  }

  proceed(): any {
    this.hireForm = true

  }

  hireNow() {
    console.log(this.form.value);

    this.service.submitInpectionRecord(this.form.value).subscribe((res: any) => {
      console.log(res);

    })

  }

}
