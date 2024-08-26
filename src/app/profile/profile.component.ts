import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckAuthService, userObj } from '../services/check-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  username: string | null = '';
  birthday: any = '';
  age: number | null = 0;
  email: string | null = '';
  valid: boolean | null = false;
  UUID: number | null = null;
  isLoading: boolean = false;
  Updated: boolean = false;
  newPassword: string = '';
  updatedAccount: any = {};
  error: boolean = false;
  constructor(private auth: CheckAuthService, private router: Router) {
    this.username = this.auth.getFromSessionStorage('username');
    const birthdayFromStorage = this.auth.getFromSessionStorage('birthday');
    this.birthday = birthdayFromStorage
      ? new Date(birthdayFromStorage)?.toISOString()?.split('T')[0]
      : null;
    this.age = Number(this.auth.getFromSessionStorage('age'));
    this.UUID = Number(this.auth.getFromSessionStorage('UUID'));
    this.email = this.auth.getFromSessionStorage('email');
    this.auth.getValid.subscribe((val: any) => (this.valid = val));
  }
  ngOnInit(): void {
    if (!this.valid) {
      this.router.navigate(['/login']);
    }
  }
  onUpdate() {
    this.isLoading = true;
    if (this.newPassword === '') {
      alert('Password has not been changed');
      this.updatedAccount = {
        username: this.username,
        birthday: this.birthday,
        age: this.age,
        email: this.email,
        valid: this.valid,
        UUID: this.UUID,
      };
    } else {
      this.updatedAccount = {
        username: this.username,
        birthday: this.birthday,
        age: this.age,
        email: this.email,
        valid: this.valid,
        UUID: this.UUID,
        password: this.newPassword,
      };
    }
    if (confirm('Are you sure you want to update your details?')) {
      console.log(this.updatedAccount);
      console.log('what');
      this.auth.updateUser(this.updatedAccount).subscribe((res: userObj) => {
        if (res.valid) {
          this.error = false;
          this.auth.saveToSessionStorage('username', res.username);
          this.auth.saveToSessionStorage('birthday', res.birthday);
          this.auth.saveToSessionStorage('age', res.age);
          this.auth.saveToSessionStorage('email', res.email);
          this.auth.saveToSessionStorage('valid', res.valid);
          this.auth.saveToSessionStorage('UUID', res.UUID);
          this.Updated = true;
          this.isLoading = false;
        } else {
          this.error = true;
          this.auth.clearSessionStorage();
          this.isLoading = false;
        }
      });
    }
  }
}
