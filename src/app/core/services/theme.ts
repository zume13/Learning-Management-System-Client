import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  
  isDarkMode = signal(false);

  constructor() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.isDarkMode.set(true);
    }

    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode.update(isDark => !isDark);

    localStorage.setItem(
      'theme',
      this.isDarkMode() ? 'dark' : 'light'
    );

    this.applyTheme();
  }

  private applyTheme() {
    document.documentElement.classList.toggle(
      'dark',
      this.isDarkMode()
    );
  }
}
