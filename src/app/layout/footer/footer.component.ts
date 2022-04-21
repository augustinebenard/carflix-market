import { ApiService } from './../../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  reminderEmail: any;


  constructor(private spinner:NgxSpinnerService, private toastr:ToastrService,private service:ApiService) { }

  ngOnInit(): void {
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
