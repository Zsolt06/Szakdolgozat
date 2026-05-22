import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { WineRegions } from './pages/wine-regions/wine-regions';
import { Wines } from './pages/wines/wines';
import { Profile } from './pages/profile/profile';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component : Home },
  { path: 'borvidekek', component : WineRegions },
  { path: 'borok', component : Wines },
  { path: 'profil', component: Profile, canActivate: [authGuard] },
  { path: 'bejelentkezes', component : Login },
  { path: '**', redirectTo: '' }
];
