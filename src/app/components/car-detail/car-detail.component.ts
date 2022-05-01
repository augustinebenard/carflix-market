import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  currentUrl: any;
  carDetail: any;

  constructor(private route: ActivatedRoute,private spinner:NgxSpinnerService, private service: ApiService) { }

  ngOnInit(): void {
this.spinner.show()
    this.currentUrl = this.route.snapshot.params;
    this.service.getCarById(this.currentUrl.id).subscribe((res: any) => {


      this.carDetail = res.data
      console.log(this.carDetail);
      this.spinner.hide()
    });
  }

}
