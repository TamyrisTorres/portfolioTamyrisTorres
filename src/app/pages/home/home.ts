import { Component } from '@angular/core';
import { competencias, experiencias, projetos } from '../../data/portfolio.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  competencias = competencias;
  experiencias = experiencias;
  projetos = projetos;
}