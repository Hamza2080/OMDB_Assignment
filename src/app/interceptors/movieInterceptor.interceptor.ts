import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environment';

@Injectable()
export class movieInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = httpRequest.clone({ url: `${environment.apiUrl}/${httpRequest.url}&apikey=${environment.apiKey}` });
    return next.handle(apiReq);
  }
}
