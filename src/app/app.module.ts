import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { UsersComponent } from './pages/users/users.component';
import { NavBarComponent } from './pages/core/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    UsersComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
