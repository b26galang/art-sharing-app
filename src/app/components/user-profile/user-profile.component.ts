import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: `
    <ul *ngIf="auth.user$ | async as user">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>`,
  styleUrl: './user-profile.component.css',
  imports: [CommonModule]
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}
