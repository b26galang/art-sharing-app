import { Component } from '@angular/core';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component'

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {

}
