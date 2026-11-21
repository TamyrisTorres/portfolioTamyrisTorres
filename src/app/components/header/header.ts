import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuAberto = signal(false);

  alternarMenu() {
    this.menuAberto.update(aberto => !aberto);
  }

  fecharMenu() {
    this.menuAberto.set(false);
  }
}