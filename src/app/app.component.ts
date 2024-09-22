import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from "./components/menubar/menubar.component";
import { HomeComponent } from './pages/home/home.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenubarComponent,
    HomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = "art-sharing-app";

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.switchTheme(this.themeService.currentTheme);
  }
}
