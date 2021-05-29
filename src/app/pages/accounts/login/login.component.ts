import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/model/login/Ilogin';
import { LoginModel } from 'src/app/model/login/loginModel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, ILogin {
  email: string = '';
  password: string = '';

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {}

  login() {
    const loginModel = new LoginModel(this.email, this.password);

    this.accountsService.login(loginModel).subscribe((response) => {
      console.log(response);
    });
  }
}
