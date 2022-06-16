import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'API_KEY';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        "API_KEY": `62a9d4369bf0965c49250308`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    });

    return next.handle(request).pipe(tap((event: any) => {
      if (event instanceof HttpResponse) {
        // console.log(" API Key is Valid");
        // http response status code

      }
    }, (error: any) => {
      console.log(error);

      if (error.status === 404 || error.status === 500) {
        // console.log("API  ot Valid!");

      }
    })
    );
  }
}