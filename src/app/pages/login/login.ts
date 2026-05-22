import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

type AuthMode = 'login' | 'register';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  mode: AuthMode = 'login';

  isLoading = false;
  errorMessage = '';

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

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  setMode(mode: AuthMode): void {
    this.mode = mode;
    this.errorMessage = '';
  }

  async onLogin(): Promise<void> {
    this.errorMessage = '';

    if (!this.isValidEmail(this.loginData.email)) {
      this.errorMessage = 'Adj meg egy érvényes email címet.';
      return;
    }

    this.isLoading = true;

    try {
      const credential = await this.authService.login(
        this.loginData.email,
        this.loginData.password
      );

      if (!credential.user.emailVerified) {
        await this.authService.logout();

        this.errorMessage =
          'A bejelentkezéshez először meg kell erősítened az email címedet.';

        return;
      }

      alert('Sikeres bejelentkezés!');
      await this.router.navigate(['/']);

    } catch {
      this.errorMessage = 'Sikertelen bejelentkezés. Ellenőrizd az email címet és a jelszót.';
      this.cdr.detectChanges();
    } finally {
      this.isLoading = false;
    }
  }

  async onRegister(): Promise<void> {
    this.errorMessage = '';
    
    if (!this.isValidEmail(this.registerData.email)) {
      this.errorMessage = 'Adj meg egy érvényes email címet.';
      return;
    }

    if (this.registerData.password.length < 8) {
      this.errorMessage = 'A jelszónak legalább 8 karakter hosszúnak kell lennie.';
      return;
    }

    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.errorMessage = 'A két jelszó nem egyezik.';
      return;
    }

    this.isLoading = true;

    try {
      await this.authService.register(
        this.registerData.name,
        this.registerData.email,
        this.registerData.password
      );
      await this.authService.logout();
      alert('Sikeres regisztráció! Kaptál egy regisztrációt megerősítő emailt. Bejelentkezés előtt erősítsd meg az email címedet.');

       this.registerData = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
      this.mode = 'login';
    } catch (error: any) {
      console.error('Regisztrációs hiba:', error);

      if (error.code === 'auth/email-already-in-use') {
        this.errorMessage = 'Ezzel az email címmel már regisztráltak.';
      } else if (error.code === 'auth/invalid-email') {
        this.errorMessage = 'Érvénytelen email cím.';
      } else if (error.code === 'auth/weak-password') {
        this.errorMessage = 'A jelszónak legalább 8 karakter hosszúnak kell lennie.';
      } else {
        this.errorMessage = 'Sikertelen regisztráció. Próbáld újra.';
      }
      this.cdr.detectChanges();
    } finally {
      this.isLoading = false;
    }
  }
}