import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule
  ],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.css'
})
export class LikeButtonComponent {
  isLiked: boolean = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }
}
