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
    titulo: 'Os 7 princípios de David Hooker',
    resumo: 'O que sete princípios dos anos 90 ainda têm a ensinar sobre engenharia de software.',
    data: '2026-11-21',
    tags: ['Engenharia de Software', 'Boas práticas']
  }
];