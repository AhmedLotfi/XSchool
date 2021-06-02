import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/helpers/appSettings';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.localStorage.get(AppSettings.KEY_USER_TOKEN) ? true : false;
  }

  logout() {
    this.isUserLoggedIn = false;
    this.router.navigateByUrl('/logout');
  }
}
