import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/helpers/appSettings';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {

    if (this.localStorage.get(AppSettings.KEY_USER_TOKEN)) {

      this.localStorage.remove(AppSettings.KEY_USER_TOKEN);
      this.localStorage.remove(AppSettings.KEY_USER_ROLE);

      this.router.navigateByUrl('/login');
    }
  }
}
