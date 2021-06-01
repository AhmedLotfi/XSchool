import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppSettings } from 'src/app/helpers/appSettings';
import { UserModel } from 'src/app/model/users/userModel';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[] = [];
  userRole: number = 0;

  constructor(private usersService: UsersService, private toastrService: ToastrService, private localStorageServicce: LocalStorageService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  acceptUser(userId: number) {

    this.usersService.acceptUser(userId).subscribe(response => {
      if (!response.success) {
        this.toastrService.error(response.message);
      } else {
        this.getUsers();
      }
    });
  }

  getUsers() {
    this.usersService.getAllUsers().subscribe(response => {
      if (!response.success) {
        this.toastrService.error(response.message);
      } else {
        this.users = (response.data);
        this.userRole = Number(this.localStorageServicce.get(AppSettings.KEY_USER_ROLE));
      }
    });
  }
}
