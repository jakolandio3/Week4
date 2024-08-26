import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CheckAuthService } from './services/check-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    AccountComponent,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'week4tut';
  loggedIn: any;
  constructor(private auth: CheckAuthService) {
    this.auth.getValid.subscribe((val: any) => (this.loggedIn = val));
  }
  logOut() {
    this.auth.logout();
  }
}
