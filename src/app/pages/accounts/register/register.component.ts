import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleTypes } from 'src/app/helpers/appEnums';
import { RegisterModel } from 'src/app/model/register/registerModel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';

  registrationMessage:string='';

  constructor(private accountService: AccountsService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {}

  register() {

    const registerModel = new RegisterModel(this.username, this.password, this.firstName,
      this.lastName, this.email, this.dateOfBirth, RoleTypes.Student);

    this.accountService.register(registerModel).subscribe(response => {
      if (response.success) {
        this.registrationMessage = `Your request sent to the admin please follow your email: ${this.email} for response`;
      } else {
        this.toastr.error(response.message);
      }
    });
  }

}
