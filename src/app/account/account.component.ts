import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckAuthService } from '../services/check-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  username: string | null = '';
  birthday: string | null = '';
  age: number | null = 0;
  email: string | null = '';
  valid: boolean | null = false;
  constructor(private auth: CheckAuthService, private router: Router) {
    this.username = this.auth.getFromSessionStorage('username');
    this.birthday = this.auth.getFromSessionStorage('birthday');
    this.age = Number(this.auth.getFromSessionStorage('age'));
    this.email = this.auth.getFromSessionStorage('email');
    this.auth.getValid.subscribe((val: any) => (this.valid = val));
  }
  ngOnInit(): void {
    if (!this.valid) {
      this.router.navigate(['/login']);
    }
  }
}
