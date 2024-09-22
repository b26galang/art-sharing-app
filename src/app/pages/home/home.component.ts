import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCardComponent } from '../../components/art-card/art-card.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArtCardComponent,
    CommonModule,
    PaginatorComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
