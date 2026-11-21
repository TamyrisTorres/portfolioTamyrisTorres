import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { marked } from 'marked';
import { artigos } from '../../data/artigos.data';

@Component({
  selector: 'app-artigo',
  imports: [RouterLink, DatePipe],
  templateUrl: './artigo.html',
  styleUrl: './artigo.scss'
})
export class Artigo {
  private http = inject(HttpClient);

  slug = input.required<string>();
  info = computed(() => artigos.find(a => a.slug === this.slug()));
  conteudo = signal('');
  erro = signal(false);

  constructor() {
    effect(() => {
      this.erro.set(false);
      this.http.get(`artigos/${this.slug()}.md`, { responseType: 'text' }).subscribe({
        next: async md => this.conteudo.set(await marked.parse(md)),
        error: () => this.erro.set(true)
      });
    });
  }
}
