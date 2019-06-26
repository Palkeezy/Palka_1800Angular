import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {RegisterUser} from '../../interfaces/registerUser';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registerUser(registerForm: RegisterUser) {
    console.log(registerForm);
    this.authService.registerUser(registerForm).subscribe(data => {
    });
  }
}
