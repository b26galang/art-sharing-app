import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ArtImageComponent } from '../art-image/art-image.component';

@Component({
  selector: 'app-profile-art-card',
  standalone: true,
  imports: [
    CardModule,
    ArtImageComponent
  ],
  templateUrl: './profile-art-card.component.html',
  styleUrl: './profile-art-card.component.css'
})
export class ProfileArtCardComponent {

}