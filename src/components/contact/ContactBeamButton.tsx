import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContactBeamButtonProps = {
  href: string;
  icon: ReactNode;
  className?: string;
  children: ReactNode;
};

// Variante do BeamButton para o contato: ícone antes do texto, miolo de 55px,
// sem a seta e abrindo em nova aba. Usa as mesmas classes globais do feixe
// (.beam-btn/.beam-ring) e a mesma geometria do anel, então o visual e a
// animação (3.2s) são idênticos aos do CTA do hero.
const RING_GEOMETRY = {
  x: "0.75",
  y: "0.75",
  width: "calc(100% - 1.5px)",
  height: "calc(100% - 1.5px)",
  rx: "11.25",
  ry: "11.25",
};

export function ContactBeamButton({ href, icon, className, children }: ContactBeamButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("beam-btn group", className)}
    >
      <svg aria-hidden="true" focusable="false" className="beam-ring">
        <rect {...RING_GEOMETRY} className="beam-ring-base" />
        <rect {...RING_GEOMETRY} pathLength={1000} className="beam-ring-tail" />
        <rect {...RING_GEOMETRY} pathLength={1000} className="beam-ring-head" />
      </svg>
      <span className="inline-flex h-[55px] flex-1 items-center justify-center gap-2.5 rounded-btn-inner bg-brand px-7 text-base font-semibold whitespace-nowrap text-text transition-colors duration-200 group-hover:bg-brand-hover">
        {icon}
        {children}
      </span>
    </a>
  );
}
