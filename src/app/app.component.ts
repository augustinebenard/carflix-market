// tslint:disable-next-line:ban-types
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private router: Router) {


  }
  ngOnInit(): void {
   this.setAnalytics()
  }
  setAnalytics() {
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {

       gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects
       })
  
    })
  }
}

