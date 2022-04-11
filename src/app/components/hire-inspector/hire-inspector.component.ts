import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hire-inspector',
  templateUrl: './hire-inspector.component.html',
  styleUrls: ['./hire-inspector.component.css']
})
export class HireInspectorComponent implements OnInit {
  date!:Date
  selectedServices!: any[];
  listOfServices!: { name: string }[];
  constructor() { }

  ngOnInit(): void {
    this.listOfServices = [
      {name: 'Inspect Car'},
      {name: 'Drive and Deliver car to you'},
      {name: 'Service Engine'}
  
  ];
  }

}
