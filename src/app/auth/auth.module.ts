import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {FormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AuthComponent,
    LoginUserComponent,
    RegisterUserComponent
  ],
  exports: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
