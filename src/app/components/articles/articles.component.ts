import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articleList: any = [];

  constructor(private service: ApiService, private spinner: NgxSpinnerService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {

    this.getArticles()

  }
  getArticles() {
    this.spinner.show()
    this.service.getArticles().subscribe((res: any) => {
      this.spinner.hide()
      this.articleList = res.data

    }, (error: any) => {
      console.log(error);
      this.spinner.hide()
    })
  }


  viewArticle(id: number): void {
    this.router.navigate(['view-article', id]);
  }
}

