import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/model/login/Ilogin';
import { LoginModel } from 'src/app/model/login/loginModel';
import { AccountsService } from 'src/app/services/accounts.service';
import { ToastrService } from 'ngx-toastr';
import { APIResponse } from 'src/app/model/core/apiResponse';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { JWTTokenService } from 'src/app/services/jwttoken.service';
import { AppSettings } from 'src/app/helpers/appSettings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, ILogin {
  email: string = '';
  password: string = '';

  constructor(
    private accountsService: AccountsService,
    private toastr: ToastrService,
    private localStorageService: LocalStorageService,
    private jwtTokenService: JWTTokenService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login() {
    const loginModel = new LoginModel(this.email, this.password);

    this.accountsService.login(loginModel).subscribe((response) => {
      this.toastr.error(response.message);
      this.localStorageService.set(AppSettings.KEY_USER_TOKEN, response.data.access_token);
      this.router.navigateByUrl('/home');
    });
  }
}
