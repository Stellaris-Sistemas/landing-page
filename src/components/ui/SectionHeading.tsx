import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  /** String normalmente; aceita JSX (ex.: <br />) para forçar a quebra de linha num ponto exato. */
  title: ReactNode;
  /** Parágrafo de apoio ao lado (desktop) / abaixo (mobile) do título. */
  aside?: ReactNode;
  /** Sobrescreve o tamanho/peso padrão do título para esta seção. */
  titleClassName?: string;
  /** Sobrescreve a largura máxima do bloco (rótulo + título) quando não há
   * aside; por padrão 760px. Precisa ser maior que isso para um
   * titleClassName mais largo ter efeito, já que o título nunca ultrapassa
   * o próprio contêiner. */
  wrapperClassName?: string;
};

const DEFAULT_TITLE_CLASSES = "heading-display text-[clamp(1.75rem,1.22rem+2.2vw,3rem)] text-text";

/** Título grande das seções de conteúdo (Serviços, Como trabalhamos...): 34px / 52px. */
export const SECTION_TITLE_LG_CLASSES =
  "font-semibold text-text text-[34px] leading-[1.1] tracking-[-0.025em] lg:text-[52px] lg:leading-[1.06] lg:tracking-[-0.028em]";

export function SectionHeading({
  id,
  eyebrow,
  title,
  aside,
  titleClassName,
  wrapperClassName,
}: SectionHeadingProps) {
  const heading = (
    <div
      className={cn(
        "flex flex-col gap-4",
        wrapperClassName ?? "max-w-[760px]",
        !!aside && "lg:max-w-[640px]",
      )}
    >
      <p className="eyebrow text-[11px] lg:text-[13px]">{eyebrow}</p>
      <h2 id={id} className={titleClassName ?? DEFAULT_TITLE_CLASSES}>
        {title}
      </h2>
    </div>
  );

  if (!aside) return heading;

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
      {heading}
      <p className="max-w-[420px] text-base leading-[1.6] text-text-2 lg:text-[17px]">{aside}</p>
    </div>
  );
}
