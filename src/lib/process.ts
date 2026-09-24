export type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico",
    description:
      "Conversamos com a sua equipe para entender o negócio e o que o sistema precisa fazer. O resultado é um escopo claro, com prazo e orçamento definidos.",
  },
  {
    id: "planejamento-e-prototipo",
    title: "Planejamento e protótipo",
    description:
      "Definimos a arquitetura e desenhamos as telas principais. Você aprova o protótipo antes da fase de desenvolvimento iniciar.",
  },
  {
    id: "desenvolvimento-em-etapas",
    title: "Desenvolvimento em etapas",
    description:
      "Construímos o sistema em ciclos curtos e apresentamos cada entrega para você acompanhar o progresso e validar o que foi desenvolvido.",
  },
  {
    id: "testes-e-entrega",
    title: "Testes e entrega",
    description:
      "Testamos e validamos tudo o que foi desenvolvido, publicamos o sistema e treinamos sua equipe para usá-lo.",
  },
  {
    id: "suporte-e-evolucao",
    title: "Suporte e evolução",
    description:
      "Acompanhamos o sistema em uso, corrigimos o que for preciso e implementamos melhorias conforme o negócio cresce.",
  },
];
