import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { UploadComponent } from './pages/upload/upload.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtComponent } from './pages/art/art.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'upload', component: UploadComponent},
    { path: 'art', component: ArtComponent}
];
