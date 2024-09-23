import { Component } from '@angular/core';
import { ArtImageComponent } from '../../components/art-image/art-image.component';
import { UserIconComponent } from "../../components/user-icon/user-icon.component";

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [
    ArtImageComponent,
    UserIconComponent
],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {

}
