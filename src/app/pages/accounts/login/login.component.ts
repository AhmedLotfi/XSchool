import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/model/login/Ilogin';
import { LoginModel } from 'src/app/model/login/loginModel';
import { AccountsService } from 'src/app/services/accounts.service';
import { ToastrService } from 'ngx-toastr';
import { APIResponse } from 'src/app/model/core/apiResponse';
import { Router } from '@angular/router';

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
    private router:Router
  ) {}

  ngOnInit(): void {}

  login() {
    const loginModel = new LoginModel(this.email, this.password);

    this.accountsService.login(loginModel).subscribe((response) => {
      this.toastr.error(response.message);
      this.router.navigateByUrl('/home');
    });
  }
}
