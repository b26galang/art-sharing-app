import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserIconComponent } from "../../components/user-icon/user-icon.component";
import { LikeButtonComponent } from '../../components/like-button/like-button.component';
import { InputTextModule } from 'primeng/inputtext';
import { Button, ButtonModule } from 'primeng/button';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/models';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-art',
  standalone: true,
  imports: [
    UserIconComponent,
    LikeButtonComponent,
    InputTextModule,
    ButtonModule,
    Button,
    ImageModule,
    CommonModule
],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {
  post: Post | null = null;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.fetchPost();
  }

  fetchPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getPostById(id).subscribe({
        next: (data) => (this.post = data), // Save the post
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Failed to fetch post details.';
        }
      });
    } else {
      this.errorMessage = 'No post ID provided.';
    }
  }
}
