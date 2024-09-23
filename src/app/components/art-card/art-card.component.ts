import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ArtImageComponent } from '../art-image/art-image.component';
import { UserIconComponent } from '../user-icon/user-icon.component';
import { LikeButtonComponent } from '../like-button/like-button.component';

@Component({
  selector: 'app-art-card',
  standalone: true,
  imports: [
    CardModule, 
    UserIconComponent, 
    ButtonModule,
    ArtImageComponent,
    LikeButtonComponent
  ],
  templateUrl: './art-card.component.html',
  styleUrl: './art-card.component.css'
})
export class ArtCardComponent {

}
