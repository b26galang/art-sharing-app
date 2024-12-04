import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common'
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-auth-button',
  template:  `
  <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
    <p-button
      label="Log out"
      (onClick)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
    </p-button>
  </ng-container>

  <ng-template #loggedOut>
    <p-button 
      label="Log in"
      (onClick)="auth.loginWithRedirect()">
    </p-button>
  </ng-template>
`,
  standalone: true,
  imports: [CommonModule, ButtonModule]
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}
