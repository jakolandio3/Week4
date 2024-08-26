import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface userCheck {
  email: string;
  pwd: string;
}
export interface userObj {
  username?: string;
  birthday?: string;
  age?: number;
  email?: string;
  valid?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CheckAuthService {
  BACKENDURL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  valid: null | string | boolean = false;

  constructor(private httpClient: HttpClient) {
    this.valid = sessionStorage.getItem('valid');
  }
  login(data: userCheck): Observable<userObj> {
    console.log('checking', data);
    return this.httpClient.post(
      this.BACKENDURL + '/api/auth',
      data,
      this.httpOptions
    );
  }
  logout(): void {}
  checkIsValid() {
    this.valid = sessionStorage.getItem('valid');
    if (this.valid && this.valid === 'true') {
      return true;
    } else return false;
  }
  saveToSessionStorage(key: string, value: userObj[keyof userObj]) {
    if (value) {
      sessionStorage.setItem(key, value.toString());
    } else {
      console.log('error on value');
    }
  }
  clearSessionStorage() {
    sessionStorage.clear();
    console.log('storage cleared');
  }
  getFromSessionStorage(key: keyof userObj) {
    return sessionStorage.getItem(key);
  }
}
