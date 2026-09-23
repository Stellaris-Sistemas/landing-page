import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BeamButtonProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

// A "borda" do beam-btn é a faixa de padding (1.5px) entre o <a> e o <span>
// interno. O traço fica centralizado no meio dela, com stroke-width igual à
// faixa: cobre do fundo escuro até o preenchimento azul sem sobrar fresta
// escura nem vazar para fora do botão.
const RING_GEOMETRY = {
  x: "0.75",
  y: "0.75",
  width: "calc(100% - 1.5px)",
  height: "calc(100% - 1.5px)",
  rx: "11.25",
  ry: "11.25",
};

export function BeamButton({ href, className, children }: BeamButtonProps) {
  return (
    <a href={href} className={cn("beam-btn group", className)}>
      <svg aria-hidden="true" focusable="false" className="beam-ring">
        <rect {...RING_GEOMETRY} className="beam-ring-base" />
        <rect {...RING_GEOMETRY} pathLength={1000} className="beam-ring-tail" />
        <rect {...RING_GEOMETRY} pathLength={1000} className="beam-ring-head" />
      </svg>
      <span className="inline-flex h-[52px] flex-1 items-center justify-center gap-2.5 rounded-btn-inner bg-brand px-[26px] text-[15px] font-semibold whitespace-nowrap text-text transition-colors duration-200 group-hover:bg-brand-hover">
        {children}
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}
