export type Project = {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  features: string[];
  ctaLabel?: string;
  whatsappMessage?: string;
  isCustom?: boolean;
};

export const PORTFOLIO_HEADER = {
  eyebrow: "Portfólio",
  title: "Projetos que desenvolvemos",
  subtitle:
    "Soluções desenvolvidas sob medida para transformar processos, automatizar tarefas e gerar resultados.",
} as const;

export const PORTFOLIO_CTA = {
  title: "Tem um projeto em mente?",
  description: "Desenvolvemos sistemas sob medida para as necessidades da sua empresa.",
  buttonLabel: "Falar sobre meu projeto",
  whatsappMessage:
    "Olá! Gostaria de falar sobre um projeto de sistema sob medida para minha empresa.",
} as const;

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "agendou",
    name: "AGENDOU+",
    category: "SaaS de gestão para locação de brinquedos e eventos",
    badge: "SaaS de Gestão",
    description:
      "Plataforma desenvolvida para empresas de locação de brinquedos e estruturas para eventos. Centraliza agendamentos, disponibilidade, contratos, catálogo online, recibos e gestão da operação em um único sistema.",
    features: [
      "Gestão de agendamentos",
      "Controle de disponibilidade",
      "Contratos digitais",
      "Catálogo online",
      "Orçamentos automáticos",
      "Recibos",
      "Relatórios e gestão financeira",
    ],
    ctaLabel: "Conhecer projeto",
    whatsappMessage:
      "Olá! Vi a plataforma AGENDOU+ no site da Stellaris e gostaria de conhecer a solução para locação e eventos.",
  },
  {
    id: "pesquisa360",
    name: "PESQUISA360",
    category: "Plataforma de pesquisas e coleta de dados",
    badge: "Coleta de Dados",
    description:
      "Sistema web desenvolvido para gerenciamento de pesquisas de campo, permitindo estruturar questionários, distribuir entrevistas e acompanhar os dados coletados de forma centralizada.",
    features: [
      "Criação e gerenciamento de pesquisas",
      "Formulários personalizados",
      "Coleta de entrevistas",
      "Controle de entrevistadores",
      "Gestão de perguntas e respostas",
      "Dashboard administrativo",
      "Organização e acompanhamento dos dados",
    ],
    ctaLabel: "Conhecer projeto",
    whatsappMessage:
      "Olá! Vi a plataforma PESQUISA360 no site da Stellaris e gostaria de conhecer a solução de coleta de dados.",
  },
  {
    id: "londri-connect",
    name: "LONDRI CONNECT",
    category: "Sistema de gestão e locação de equipamentos",
    badge: "Gestão Operacional",
    description:
      "Sistema desenvolvido para empresas que trabalham com locação e gerenciamento de equipamentos, centralizando clientes, equipamentos, funcionários, agenda e operações.",
    features: [
      "Cadastro de clientes",
      "Gestão de equipamentos",
      "Controle de funcionários",
      "Agendamentos",
      "Controle de retirada e devolução",
      "Registro de fotos",
      "Dashboard administrativo",
      "Organização da operação",
    ],
    ctaLabel: "Conhecer projeto",
    whatsappMessage:
      "Olá! Vi o sistema LONDRI CONNECT no site da Stellaris e gostaria de saber mais sobre a solução para locação.",
  },
  {
    id: "sistemas-sob-medida",
    name: "SISTEMAS SOB MEDIDA",
    category: "Desenvolvimento personalizado",
    badge: "Sob Demanda",
    isCustom: true,
    description:
      "Além dos produtos apresentados, desenvolvemos softwares e plataformas exclusivas para sua operação — unindo inteligência artificial, gestão financeira, emissão fiscal e integrações com serviços de terceiros.",
    features: [
      "Inteligência Artificial e automações",
      "Gestão financeira, fluxo e conciliação",
      "Emissão de Notas Fiscais (NF-e/NFS-e)",
      "Integrações com APIs e terceiros",
      "Sistemas de gestão e ERPs sob medida",
      "CRMs e funis operacionais",
      "Dashboards e relatórios em tempo real",
      "Plataformas web e sistemas SaaS",
    ],
    ctaLabel: "Falar sobre meu projeto",
    whatsappMessage:
      "Olá! Gostaria de conversar com a Stellaris sobre o desenvolvimento de um sistema sob medida com IA, integrações e gestão para minha empresa.",
  },
];
