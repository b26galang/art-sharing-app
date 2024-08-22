import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    AvatarModule,
    ButtonModule,
    RippleModule,
    StyleClassModule
  ],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.css'
})
export class NavSidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
