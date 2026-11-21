export interface ArtigoInfo {
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  tags: string[];
}

export const artigos: ArtigoInfo[] = [
  {
    slug: 'principios-de-hooker',
    titulo: 'Princípios de Hooker #1: a razão de existir',
    resumo: 'Do Direito à engenharia de software: por que voltar aos princípios, e o primeiro deles, resolver um problema de forma simples, agregando valor.',
    data: '2026-11-21',
    tags: ['Engenharia de Software', 'Boas práticas']
  }
];
