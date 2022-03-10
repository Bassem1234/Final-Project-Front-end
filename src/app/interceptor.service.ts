import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManagmentServiceService } from './managment-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loginService = this.injector.get(ManagmentServiceService);
      let tokenizedReq = req.clone({
        setHeaders: {
        Authorization: `bearer ${loginService.getToken()}`
      }}); 
      return next.handle(tokenizedReq);
  }
}
