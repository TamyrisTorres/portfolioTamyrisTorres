import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Artigos } from './pages/artigos/artigos';
import { Artigo } from './pages/artigo/artigo';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'artigos', component: Artigos },
  { path: 'artigos/:slug', component: Artigo },
  { path: '**', redirectTo: '' }
];