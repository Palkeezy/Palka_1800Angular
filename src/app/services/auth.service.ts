import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hosts} from '../enums/hosts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  loginUser(user) {
    return this.http.post(`${Hosts.API_HOST}/auth/user`, {email: user.email, password: user.password});
  }

  registerUser(user) {
    return this.http.post(`${Hosts.API_HOST}/user`, {
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
      phone: user.phone
    });
  }
}
