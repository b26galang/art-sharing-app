import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-art-image',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './art-image.component.html',
  styleUrl: './art-image.component.css'
})
export class ArtImageComponent {

}
