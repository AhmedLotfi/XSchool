import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/model/users/userModel';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private usersService: UsersService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getAllUsers().subscribe(response => {
      if (!response.success) {
        this.toastrService.error(response.message);
      } else {
        this.users = (response.data);
        console.log(this.users);
      }
    });
  }
}
