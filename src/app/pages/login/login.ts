import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type AuthMode = 'login' | 'register';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  mode: AuthMode = 'login';

  loginData = {
    email: '',
    password: ''
  };

  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  setMode(mode: AuthMode): void {
    this.mode = mode;
  }

  onLogin(): void {
    console.log('Bejelentkezés:', this.loginData);
  }

  onRegister(): void {
    console.log('Regisztráció:', this.registerData);
  }
}