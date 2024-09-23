import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { ProfileArtCardComponent } from '../../components/profile-art-card/profile-art-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ImageModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    PaginatorComponent,
    ProfileArtCardComponent,
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isFollowing: boolean = false;

  toggleFollow() {
    this.isFollowing = !this.isFollowing;
  }

}
