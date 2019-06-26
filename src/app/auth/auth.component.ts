import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  showLogin: boolean;
  showRegistration: boolean;
  isTokenPresent: any;


  constructor() { }

  ngOnInit() {
    this.isTokenPresent = localStorage.getItem('token');
  }

  login() {
      this.showLogin = !this.showLogin;
      this.showRegistration = false;
  }

  registration() {
      this.showRegistration = !this.showRegistration;
      this.showLogin = false;
  }

  logout() {
    localStorage.removeItem('token');
    this.isTokenPresent = false;
  }
}
