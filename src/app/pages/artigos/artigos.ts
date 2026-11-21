import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { artigos } from '../../data/artigos.data';

@Component({
  selector: 'app-artigos',
  imports: [RouterLink, DatePipe],
  templateUrl: './artigos.html',
  styleUrl: './artigos.scss'
})
export class Artigos {
  artigos = [...artigos].sort((a, b) => b.data.localeCompare(a.data));
}
