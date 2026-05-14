import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { WineRegions } from './pages/wine-regions/wine-regions';
import { Wines } from './pages/wines/wines';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component : Home },
  { path: 'borvidekek', component : WineRegions },
  { path: 'borok', component : Wines },
  { path: 'bejelentkezes', component : Login },
  { path: '**', redirectTo: '' }
];
