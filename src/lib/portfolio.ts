export type PortfolioImage = { src: string; alt: string; caption: string };

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** Exatamente duas linhas no desktop (1440px). */
  description: string;
  tags: [string, string, string];
  /** Carrossel, na ordem de exibição (mínimo 1). Capturas reais: WebP 1600×1000 (16:10). */
  images: PortfolioImage[];
};

export const PORTFOLIO_HEADER = {
  eyebrow: "Portfólio",
  title: "Conheça alguns dos projetos que já entregamos",
} as const;

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    slug: "agendou-plus",
    name: "Agendou+",
    category: "Locação de brinquedos para festas e eventos",
    description:
      "Plataforma que centraliza agenda, contratos, recibos e orçamentos de locadoras de brinquedos, com catálogo online para os clientes.",
    tags: ["Agendamentos", "Contratos digitais", "Catálogo online"],
    images: [
      {
        src: "/portfolio/agendou-plus/01-agenda.svg",
        alt: "Tela de agenda de reservas do Agendou+",
        caption: "Agenda de reservas",
      },
      {
        src: "/portfolio/agendou-plus/02-contratos.svg",
        alt: "Tela de contratos digitais do Agendou+",
        caption: "Contratos digitais",
      },
      {
        src: "/portfolio/agendou-plus/03-catalogo.svg",
        alt: "Tela do catálogo online do Agendou+",
        caption: "Catálogo online",
      },
    ],
  },
  {
    slug: "londri-connect",
    name: "Londri Connect",
    category: "Locação de equipamentos médicos e estéticos",
    description:
      "Plataforma que controla itens, agenda, contratos, notas fiscais e financeiro de locadoras de equipamentos médicos e estéticos.",
    tags: ["Equipamentos", "Agendamentos", "Registro de fotos"],
    images: [
      {
        src: "/portfolio/londri-connect/01-equipamentos.svg",
        alt: "Tela de gestão de equipamentos do Londri Connect",
        caption: "Gestão de equipamentos",
      },
      {
        src: "/portfolio/londri-connect/02-retirada.svg",
        alt: "Tela de retirada e devolução com fotos do Londri Connect",
        caption: "Retirada e devolução com fotos",
      },
      {
        src: "/portfolio/londri-connect/03-operacao.svg",
        alt: "Tela do painel da operação do Londri Connect",
        caption: "Painel da operação",
      },
    ],
  },
  {
    slug: "norteprPesquisas",
    name: "Norte PR Pesquisas",
    category: "Gestão de pesquisas de campo",
    description:
      "Plataforma que organiza pesquisas, questionários e entrevistadores, com coleta de respostas pelo celular, funcionando também de forma offline.",
    tags: ["Questionários", "Entrevistas", "Dashboard"],
    images: [
      {
        src: "/portfolio/pesquisa360/01-painel.svg",
        alt: "Tela do painel de resultados do Norte PR Pesquisas",
        caption: "Painel de resultados",
      },
      {
        src: "/portfolio/pesquisa360/02-builder.svg",
        alt: "Tela de criação de questionários do Norte PR Pesquisas",
        caption: "Criação de questionários",
      },
      {
        src: "/portfolio/pesquisa360/03-equipe.svg",
        alt: "Tela de controle de entrevistadores do Norte PR Pesquisas",
        caption: "Controle de entrevistadores",
      },
    ],
  },
];
