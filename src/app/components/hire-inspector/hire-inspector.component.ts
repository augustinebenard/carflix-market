import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire-inspector',
  templateUrl: './hire-inspector.component.html',
  styleUrls: ['./hire-inspector.component.css']
})
export class HireInspectorComponent implements OnInit {
  date!:Date
  constructor() { }

  ngOnInit(): void {
  }

}
