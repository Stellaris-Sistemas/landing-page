import { GitMerge, Globe, Layers, Smartphone, Users, Zap, type LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    id: "sistemas-sob-medida",
    title: "Sistemas sob medida",
    description:
      "Sistemas desenvolvidos do zero, pensados exclusivamente para as necessidades e demandas reais da sua empresa. O software que se adapta à forma como sua equipe trabalha.",
    icon: Layers,
  },
  {
    id: "crm",
    title: "CRM",
    description:
      "Centralize o relacionamento com seus clientes em uma única plataforma. Acompanhe oportunidades, histórico e indicadores em um só lugar, sem planilhas e sem complicações.",
    icon: Users,
  },
  {
    id: "sites-profissionais",
    title: "Sites profissionais",
    description:
      "Sua presença digital com design moderno, carregamento rápido e estrutura preparada para crescer. Sites institucionais, landing pages e portais que convertem visitantes em clientes.",
    icon: Globe,
  },
  {
    id: "aplicativos",
    title: "Aplicativos",
    description:
      "Apps pensados para quem vai usá-los todos os dias, de qualquer lugar, seja sua equipe ou seus clientes. Rápidos, simples e conectados aos sistemas já existentes da sua empresa.",
    icon: Smartphone,
  },
  {
    id: "automacao-de-processos",
    title: "Automação de processos",
    description:
      "Elimine tarefas repetitivas e reduza erros operacionais. Automatizamos os fluxos de trabalho que hoje tomam horas da sua equipe, liberando tempo para o que realmente importa para o negócio.",
    icon: Zap,
  },
  {
    id: "integracoes",
    title: "Integrações",
    description:
      "Conectamos as ferramentas que você já usa para que ninguém precise copiar dados de um lugar para outro. Seu ERP, sua loja virtual ou sistema de pagamentos podem trocar informações automaticamente.",
    icon: GitMerge,
  },
];
