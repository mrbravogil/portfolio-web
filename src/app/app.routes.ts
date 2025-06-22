import { Routes } from '@angular/router';
import { HomeEnComponent } from './pages/home-en/home-en.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'en', component: HomeEnComponent },
];
