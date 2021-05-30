import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JWTTokenService } from '../services/jwttoken.service';
import { LocalStorageService } from '../services/local-storage.service';
import { AppSettings } from '../helpers/appSettings';

@Injectable()
export class GlobalAppInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const token = this.localStorageService.get(AppSettings.KEY_USER_TOKEN);
    request = request.clone({
      url:  request.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
   
    return next.handle(request);
  }
}
