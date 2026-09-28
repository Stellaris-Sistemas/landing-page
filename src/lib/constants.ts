export const SITE = {
  name: "Stellaris Sistemas",
  wordmark: "STELLARIS SISTEMAS",
  title: "Stellaris Sistemas",
  description:
    "Desenvolvemos sistemas, aplicativos e sites sob demanda para empresas de todos os ramos, do entendimento do problema à entrega e ao suporte contínuo.",
  // Espelha --color-bg; metadata não lê variáveis CSS.
  themeColor: "#0B0E14",
} as const;

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

export const CONTACT_CTA = { href: "#contato", label: "Fale conosco" } as const;

export const SERVICES_CTA = {
  text: "Não encontrou o que precisa?",
  linkLabel: "Conte sobre o seu projeto",
} as const;

export const HERO = {
  title: "Software sob medida para o rumo do seu negócio.",
  description: {
    desktop:
      "Desenvolvemos sistemas, aplicativos e sites sob demanda para empresas de todos os ramos, do entendimento do problema à entrega e ao suporte contínuo.",
    mobile:
      "Sistemas, aplicativos e sites sob demanda para empresas de todos os ramos, do entendimento do problema à entrega.",
  },
  secondaryCta: { href: "#servicos", label: "O que fazemos" },
} as const;

export const SECTIONS = [
  { id: "servicos", eyebrow: "Serviços", title: "O que construímos para a sua empresa" },
  {
    id: "processo",
    eyebrow: "Como trabalhamos",
    title: "O caminho até a solução que você busca",
  },
  { id: "portfolio", eyebrow: "Portfólio", title: "Projetos que já estão em órbita" },
  {
    id: "sobre",
    eyebrow: "Sobre nós",
    title: "Nosso propósito é tornar a tecnologia uma aliada do seu negócio",
  },
  { id: "contato", eyebrow: "Contato", title: "Vamos traçar a rota do seu projeto" },
] as const;
