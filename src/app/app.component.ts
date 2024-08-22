import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ArtCardComponent } from './components/art-card/art-card.component';
import { GalleriaModule } from 'primeng/galleria';
import { ArtCarouselComponent } from './components/art-carousel/art-carousel.component';
import { TagModule } from 'primeng/tag';
import { CategoryTagComponent } from './components/category-tag/category-tag.component';
import { SidebarModule } from 'primeng/sidebar';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { InputTextModule } from 'primeng/inputtext';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { UserIconComponent } from './components/user-icon/user-icon.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ArtCardComponent,
    ArtCarouselComponent,
    CategoryTagComponent,
    NavSidebarComponent,
    SearchBarComponent,
    UserIconComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'art-sharing-app';
}
