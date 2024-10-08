import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckAuthService, userObj } from '../services/check-auth.service';
// had to make an interface to satisfy typescript strict mode :)
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private auth: CheckAuthService) {}
  email = '';
  password = '';
  errorMsg = 'Incorrect Email or Password';
  error = false;
  user: userObj | null = null;

  loginFn() {
    if (this.email === '' || this.password === '') {
      this.error = true;
      this.errorMsg = 'Please Enter Both an Email and a Password';
      return;
    }
    this.auth
      .login({
        email: this.email,
        pwd: this.password,
      })
      .subscribe(
        (res: userObj) => {
          if (res.valid) {
            this.error = false;
            this.auth.saveToSessionStorage('username', res.username);
            this.auth.saveToSessionStorage('birthday', res.birthday);
            this.auth.saveToSessionStorage('age', res.age);
            this.auth.saveToSessionStorage('email', res.email);
            this.auth.saveToSessionStorage('valid', res.valid);
            this.auth.saveToSessionStorage('UUID', res.UUID);

            this.auth.checkIsValid();
            this.router.navigate(['/account']);
          } else {
            this.error = true;
            this.errorMsg = 'Incorrect Email or Password';
            this.auth.clearSessionStorage();
            this.auth.checkIsValid();
          }
        },
        (e) => {
          if (e.statusText === 'Unknown Error') {
            this.errorMsg = `${e.name}: Can't connect to Server`;
          } else this.errorMsg = `${e.name}: ${e.statusText}`;

          this.error = true;
        }
      );
  }
}
