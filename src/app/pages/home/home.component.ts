import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCardComponent } from '../../components/art-card/art-card.component';
import { ArtCarouselComponent } from '../../components/art-carousel/art-carousel.component';
import { CategoryTagComponent } from '../../components/category-tag/category-tag.component';
import { PaginatorModule } from 'primeng/paginator';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArtCardComponent,
    ArtCarouselComponent,
    CategoryTagComponent,
    CommonModule,
    PaginatorModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  first: number = 0;

  rows: number = 10;

  onPageChange(event: PageEvent) {
      this.first = event.first;
      this.rows = event.rows;
  }

}
