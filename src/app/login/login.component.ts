import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface userObj {
  email: string;
  pwd: string;
  id: string;
} // had to make an interface to satisfy typescript strict mode :)
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  email = '';
  password = '';
  error = false;
  users = JSON.stringify([
    { email: 'abc@com.au', pwd: '123', id: '1' },
    { email: 'jakob@example.com', pwd: '1234', id: '2' },
    { email: 'steve@com.au', pwd: '12345', id: '3' },
  ]); //set up some hard coded values for correct log in functionality
  loginFn() {
    console.log(this.email, this.password);
    console.log(this.users);
    let userArray = JSON.parse(this.users);
    userArray.map((user: userObj) => {
      console.log(user.email);
      if (user.email === this.email && user.pwd === this.password) {
        this.error = false;
        this.router.navigate(['/account']); //note i could use the slug :/id to create unique account pages in the future, this would be entered as the second param in navigate()
      } else console.log('something wrong');
      this.error = true;
    });
  }
}
