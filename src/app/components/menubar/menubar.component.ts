import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { DarkModeSwitchComponent } from '../dark-mode-switch/dark-mode-switch.component';
import { UploadBtnComponent } from '../upload-btn/upload-btn.component';
import { UserIconComponent } from '../user-icon/user-icon.component';
import { AuthButtonComponent } from '../auth-button/auth-button.component'
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    ToolbarModule,
    SearchBarComponent,
    UploadBtnComponent,
    UserIconComponent,
    DarkModeSwitchComponent,
    AuthButtonComponent,
    CommonModule
  ],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  isAuthenticated: Observable<boolean> = of(false);
  user$: Observable<any> = of (null);

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuthenticated$;
    this.user$ = this.auth.user$;
  }
}
