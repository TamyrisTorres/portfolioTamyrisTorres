import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Artigos } from './pages/artigos/artigos';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'artigos', component: Artigos },
    { path: '**', redirectTo: '' },
];
