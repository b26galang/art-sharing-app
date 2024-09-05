import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCardComponent } from '../../components/art-card/art-card.component';
import { ArtCarouselComponent } from '../../components/art-carousel/art-carousel.component';
import { CategoryTagComponent } from '../../components/category-tag/category-tag.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArtCardComponent,
    ArtCarouselComponent,
    CategoryTagComponent,
    CommonModule,
    PaginatorComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
