import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { UploadBtnComponent } from '../upload-btn/upload-btn.component';
import { UserIconComponent } from '../user-icon/user-icon.component';
import { DarkModeSwitchComponent } from '../dark-mode-switch/dark-mode-switch.component';


@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    ToolbarModule,
    SearchBarComponent,
    UploadBtnComponent,
    UserIconComponent,
    DarkModeSwitchComponent
  ],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  
}
