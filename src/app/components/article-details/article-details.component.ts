import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  currentUrl: any;
  article: any;
  term: any;
  relatedArticles: any = [];
  articleList: any;

  constructor(private route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService, private service: ApiService) { }

  ngOnInit() {
    this.spinner.show()
    this.currentUrl = this.route.snapshot.params;
    this.service.getArticleById(this.currentUrl.id).subscribe((res: any) => {
      this.article = res.data
      this.spinner.hide()
      this.filterRelatedArticles()

    });
    this.getArticles()
  }

  filterRelatedArticles() {
    this.service.filterRelatedArticles(this.article?.category).subscribe((res: any) => {
      console.log(res);
      this.relatedArticles = res.data

    })
  }

  viewArticle(id: number): void {
    this.spinner.show()
 
    this.router.navigate(['view-article', id]);
    window.location.reload();
    this.spinner.hide()
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
}
