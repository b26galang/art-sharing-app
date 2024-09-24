import { Component } from '@angular/core';
import { ArtImageComponent } from '../../components/art-image/art-image.component';
import { UserIconComponent } from "../../components/user-icon/user-icon.component";
import { LikeButtonComponent } from '../../components/like-button/like-button.component';
import { InputTextModule } from 'primeng/inputtext';
import { Button, ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-art',
  standalone: true,
  imports: [
    ArtImageComponent,
    UserIconComponent,
    LikeButtonComponent,
    InputTextModule,
    ButtonModule
],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {

}
