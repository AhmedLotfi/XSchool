import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AppSettings } from '../helpers/appSettings';
import { APIResponse } from '../model/core/apiResponse';
import { LoginModel } from '../model/login/loginModel';
import { catchError, retry } from 'rxjs/operators';
import { RegisterModel } from '../model/register/registerModel';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) { }

  login(loginModel: LoginModel): Observable<APIResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http
      .post<APIResponse>(`${AppSettings.API_EndPoint}/Accounts/Login`,
        loginModel,
        httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }


  register(registerModel: RegisterModel): Observable<APIResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http
      .post<APIResponse>(`${AppSettings.API_EndPoint}/Accounts/Register`,
        registerModel,
        httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
