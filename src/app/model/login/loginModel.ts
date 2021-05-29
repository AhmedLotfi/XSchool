import { ILogin } from './Ilogin';

export class LoginModel implements ILogin {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
