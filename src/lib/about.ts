export type Principle = {
  title: string;
  description: string;
};

export const ABOUT = {
  eyebrow: "Sobre nós",
  title: "Nossa missão é tornar a tecnologia uma aliada do seu negócio",
  intro: {
    label: "Quem somos",
    highlight:
      "A Stellaris Sistemas foi criada para levar software sob medida a empresas de qualquer porte, pensado para o seu negócio, o seu fluxo de trabalho e as suas necessidades.",
    paragraphs: [
      "Sabemos que muitas empresas ainda dependem de planilhas ou de sistemas genéricos, e que a equipe perde horas no dia a dia contornando as limitações de ferramentas que não foram feitas para ela.",
      "Por isso, começamos cada projeto entendendo como a sua empresa funciona. Você acompanha as entregas de perto e, com o sistema em uso, seguimos ao seu lado para que ele evolua junto com o negócio.",
    ],
  },
  principles: {
    label: "Nossos princípios",
    items: [
      {
        title: "Transparência",
        description:
          "Você sabe em que ponto o projeto está, o que vem a seguir e por que cada decisão foi tomada.",
      },
      {
        title: "Compromisso real",
        description: "Prazo e escopo são levados a sério. O que foi acordado é o que entregamos.",
      },
      {
        title: "Qualidade que dura",
        description:
          "Software pensado para ser mantido e evoluir, não só para funcionar no dia da entrega.",
      },
      {
        title: "Parceria de longo prazo",
        description:
          "A entrega não é o fim. Seguimos ao seu lado enquanto o sistema cresce com o negócio.",
      },
    ] satisfies Principle[],
  },
};
