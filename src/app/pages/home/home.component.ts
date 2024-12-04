import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCardComponent } from '../../components/art-card/art-card.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { PostService } from '../../services/post.service';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArtCardComponent,
    CommonModule,
    PaginatorComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  samplePost = {
    title: "Artwork Title",
    imageUrl: 'https://cdn.pixabay.com/photo/2023/12/07/11/11/girl-8435339_1280.png'
  };

  posts$: Observable<any[]> = of([]);

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
