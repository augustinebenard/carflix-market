import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hire-inspector',
  templateUrl: './hire-inspector.component.html',
  styleUrls: ['./hire-inspector.component.css']
})
export class HireInspectorComponent implements OnInit {
  date!:Date
  selectedServices!: any[];
  listOfServices!: any[];
  constructor(private service:ApiService) { }

  ngOnInit(): void {

  this.getInpectionService()
  }

getInpectionService(){
  this.service.getInspectionService().subscribe((res:any)=>{
    console.log(res);
    this.listOfServices=res.data

  },(error:any)=>{
    console.log(error);

  }


  )
}

}
