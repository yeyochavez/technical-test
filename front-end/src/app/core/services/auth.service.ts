import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, USERS_URL } from '../constants/urls.constant';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL: string;

  constructor(private _http: HttpClient) {
    this.BASE_URL = BASE_URL + USERS_URL;
  }

  singIn(user: User): Promise<User> {
    let url = this.BASE_URL + "login";
    return this._http.post<any>(url, user).toPromise();
  }

}
