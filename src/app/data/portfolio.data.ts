export interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
}

export interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link: string;
}

export const competencias: string[] = [
  'Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'APIs REST',
  'MySQL', 'PostgreSQL', 'JUnit', 'Maven', 'Gradle', 'Docker',
  'Angular', 'TypeScript', 'Git', 'Scrum'
];

export const experiencias: Experiencia[] = [
  {
    empresa: 'Accenture',
    cargo: 'Software Engineer',
    periodo: '11/2025 – Atual',
    descricao: 'Atuação em projeto de sustentação: análise e correção de bugs, leitura e evolução de código legado e apoio técnico ao time.'
  },
  {
    empresa: 'Minsait',
    cargo: 'Analista Desenvolvedora Pleno',
    periodo: '05/2024 – 10/2025',
    descricao: 'Desenvolvimento na plataforma Liferay. Participei da nova página inicial da Gollog, com módulos de layout reutilizáveis, tagueamento para analytics e integração com APIs da Gol.'
  },
  {
    empresa: 'Liferay',
    cargo: 'Associate Consultant e Engenheira de Software Júnior',
    periodo: '04/2022 – 12/2023',
    descricao: 'Automação da migração de clientes para o Liferay 7.4 com Java e Regex, projetos para clientes com Java e MySQL, e correção de bugs no criador de sites da plataforma.'
  }
];

export const projetos: Projeto[] = [
  {
    titulo: 'Emissor de NF-e',
    descricao: 'API para emissão de notas fiscais eletrônicas, com validação de CPF/CNPJ e geração do XML no modelo nacional da SEFAZ.',
    tecnologias: ['Java', 'Spring Boot', 'Spring Security'],
    link: 'https://github.com/TamyrisTorres/emissorNfeTorres'
  },
  {
    titulo: 'MentorIA',
    descricao: 'Plataforma de orientação profissional: o usuário pergunta sobre uma carreira e a IA responde com habilidades, áreas de atuação e dicas de formação.',
    tecnologias: ['Angular', 'Java', 'Spring Security', 'IA'],
    link: 'https://github.com/TamyrisTorres/mentorIA'
  },
  {
    titulo: 'RURL',
    descricao: 'Encurtador de URLs que gera links curtos com redirecionamento para o endereço original.',
    tecnologias: ['Java', 'APIs REST'],
    link: 'https://github.com/TamyrisTorres/RURL'
  }
];