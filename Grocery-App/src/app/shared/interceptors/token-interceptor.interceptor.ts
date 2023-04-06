import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private userservice: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token');


    if (token) {
      request = request.clone({
        setHeaders: {
          token: token,
        }
      });


    }

    console.log("this request",request);
    return next.handle(request);


  }
}
