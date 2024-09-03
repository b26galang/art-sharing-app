import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { UploadBtnComponent } from '../upload-btn/upload-btn.component';
import { UserIconComponent } from '../user-icon/user-icon.component';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    ToolbarModule,
    SearchBarComponent,
    UploadBtnComponent,
    UserIconComponent
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

}
