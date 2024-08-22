import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { UserIconComponent } from '../user-icon/user-icon.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-art-card',
  standalone: true,
  imports: [
    CardModule, 
    UserIconComponent, 
    ButtonModule],
  templateUrl: './art-card.component.html',
  styleUrl: './art-card.component.css'
})
export class ArtCardComponent {

}
