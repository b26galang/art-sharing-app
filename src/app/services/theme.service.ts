
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme: string ='light-theme';

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
      this.applyTheme(savedTheme);
    } else {
      this.applyTheme(this.currentTheme);
    }
  }

  switchTheme(theme: string): void {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  applyTheme(theme: string): void {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = `assets/theme/${theme}.css`;
    } else {
      const link = document.createElement('link');
      link.id = 'app-theme';
      link.rel = 'stylesheet';
      link.href = `assets/theme/${theme}.css`;

      document.head.appendChild(link);
    }
  }
}
