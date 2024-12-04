import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { UploadComponent } from './pages/upload/upload.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtComponent } from './pages/art/art.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'upload', component: UploadComponent},
    { path: 'post/:id', component: ArtComponent},
    { path: 'settings', component: UserSettingsComponent}
];
