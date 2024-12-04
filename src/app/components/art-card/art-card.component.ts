import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { UserIconComponent } from '../user-icon/user-icon.component';
import { LikeButtonComponent } from '../like-button/like-button.component';
import { ImageModule } from 'primeng/image';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-art-card',
  standalone: true,
  imports: [
    CardModule, 
    UserIconComponent, 
    ButtonModule,
    LikeButtonComponent,
    ImageModule,
    RouterModule
  ],
  templateUrl: './art-card.component.html',
  styleUrl: './art-card.component.css'
})
export class ArtCardComponent {
  @Input() post: any;
}
