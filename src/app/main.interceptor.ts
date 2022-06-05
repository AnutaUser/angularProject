import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmM5OGVhOTY1OTU3NDk3MDdmNmNhMzdmMjE1YzI5MSIsInN1YiI6IjYyMDI2NzNmMTQ0M2Y0MDA5ODM2MGIxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hivmMPmyxdEbo7W_phczZmmIPYNEOVs2FNhkeFYjJjo'

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {Authorization: `Bearer ${this.token}`}
    })
    return next.handle(request);
  }
}
