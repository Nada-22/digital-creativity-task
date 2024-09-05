import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Request = request.clone({
      setHeaders: {
        'Accept': 'application/json',
        'Accept-Language': 'ar',
        'App-Version': '11',
        'Device-Name': 'chrome',
        'Device-OS-Version': '13',
        'Device-UDID': '1234',
        'Device-Push-Token': '123456',
        'Device-Type': 'web',
        'Authorization':'Bearer  '+ this.authService.getToken()
   
      },
    });
    
    // if (this.authService.isLoggedIn()) {
    //   Request.headers.set('Authorization','Bearer  '+this.authService.getToken());
    // }
    
    return next.handle(Request);
  }
}
