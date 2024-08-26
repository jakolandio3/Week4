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
  error = false;
  user: userObj | null = null;
  // users = JSON.stringify([
  //   { email: 'abc@com.au', pwd: '123', id: '1' },
  //   { email: 'jakob@example.com', pwd: '1234', id: '2' },
  //   { email: 'steve@com.au', pwd: '12345', id: '3' },
  // ]); //set up some hard coded values for correct log in functionality
  loginFn() {
    this.auth
      .login({
        email: this.email,
        pwd: this.password,
      })
      .subscribe((res: userObj) => {
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
          this.auth.clearSessionStorage();
          this.auth.checkIsValid();
        }
      });

    // console.log(this.email, this.password);
    // console.log(this.users);
    // let userArray = JSON.parse(this.users);
    // userArray.map((user: userObj) => {
    //   console.log(user.email);
    //   if (user.email === this.email && user.pwd === this.password) {
    //     this.error = false;
    //     this.router.navigate(['/account']); //note i could use the slug :/id to create unique account pages in the future, this would be entered as the second param in navigate()
    //   } else console.log('something wrong');
    //   this.error = true;
    // });
  }
}
