import { Component } from '@angular/core';
import { ArtImageComponent } from '../../components/art-image/art-image.component';
import { UserIconComponent } from "../../components/user-icon/user-icon.component";
import { LikeButtonComponent } from '../../components/like-button/like-button.component';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [
    ArtImageComponent,
    UserIconComponent,
    LikeButtonComponent
],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {

}
