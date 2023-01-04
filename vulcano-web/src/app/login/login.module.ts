import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { loginRoutes } from './login.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    ReactiveFormsModule
  ]
})
export class LoginModule { }
