import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, USERS_URL } from '../constants/urls.constant';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: string;

  constructor(private _http: HttpClient) {
    this.BASE_URL = BASE_URL + USERS_URL;
  }

  saveUser(user: User): Promise<User> {
    let url = this.BASE_URL + "register";
    return this._http.post<any>(url, user).toPromise();
  }

}
