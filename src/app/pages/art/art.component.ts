import { Component } from '@angular/core';
import { ArtImageComponent } from '../../components/art-image/art-image.component';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [ArtImageComponent],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {

}
