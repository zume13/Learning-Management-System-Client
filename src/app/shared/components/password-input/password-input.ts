import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-password-input',
  imports: [],
  templateUrl: './password-input.html',
  styleUrl: './password-input.css',
})
export class PasswordInput {
  label = input('Password');
  placeholder = input('Enter your password');

  showPassword = signal(false);

  togglePassword() {
    this.showPassword.update(show => !show);
  }
}
