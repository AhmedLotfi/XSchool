import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { UsersComponent } from './pages/users/users.component';
import { NavBarComponent } from './pages/core/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/accounts/login/login.component';
import { RegisterComponent } from './pages/accounts/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { GlobalAppInterceptor } from './interceptors/global-app.interceptor';
import { LogoutComponent } from './pages/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    UsersComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GlobalAppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
