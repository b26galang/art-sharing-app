import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArtCardComponent } from './components/art-card/art-card.component';
import { ArtCarouselComponent } from './components/art-carousel/art-carousel.component';
import { CategoryTagComponent } from './components/category-tag/category-tag.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { MenubarComponent } from "./components/menubar/menubar.component";
import { OverlayModule } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ArtCardComponent,
    ArtCarouselComponent,
    CategoryTagComponent,
    NavSidebarComponent,
    SearchBarComponent,
    UserIconComponent,
    MenubarComponent,
    OverlayModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'art-sharing-app';
}
