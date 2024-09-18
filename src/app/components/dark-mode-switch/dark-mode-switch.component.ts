import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dark-mode-switch',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './dark-mode-switch.component.html',
  styleUrls: ['./dark-mode-switch.component.css']
})
export class DarkModeSwitchComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeService.currentTheme === 'dark-theme'
  }

  toggleTheme(): void {
    const newTheme = this.isDarkMode ? 'light-theme' : 'dark-theme';
    this.themeService.switchTheme(newTheme);
    this.isDarkMode = !this.isDarkMode;
  }
}
