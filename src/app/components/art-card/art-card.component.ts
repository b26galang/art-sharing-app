import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { UserIconComponent } from '../user-icon/user-icon.component';
import { ButtonModule } from 'primeng/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { ArtImageComponent } from '../art-image/art-image.component';

@Component({
  selector: 'app-art-card',
  standalone: true,
  imports: [
    CardModule, 
    UserIconComponent, 
    ButtonModule,
    ArtImageComponent,
    OverlayModule
  ],
  templateUrl: './art-card.component.html',
  styleUrl: './art-card.component.css'
})
export class ArtCardComponent {

}
