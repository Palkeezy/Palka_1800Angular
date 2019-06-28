import { Component, OnInit } from '@angular/core';
import {LoginUser} from '../../interfaces/loginUser';
import {AuthService} from '../../services/auth.service';
import {API_Response} from '../../interfaces/API_Response';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  constructor(private authService: AuthService) { }


  ngOnInit() {
  }

  loginUser(loginForm: LoginUser) {
    console.log(loginForm);
    this.authService.loginUser(loginForm).subscribe((data: API_Response) => {
      // отримуєм токен
      console.log(data.msg);
      if (data.success) {
        localStorage.setItem('token', `${data.msg}`);
        window.location.reload();
      }
    });
  }
}
