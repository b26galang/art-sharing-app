import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-art-carousel',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './art-carousel.component.html',
  styleUrl: './art-carousel.component.css'
})
export class ArtCarouselComponent {

}
