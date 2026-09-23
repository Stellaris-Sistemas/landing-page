import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  /** Parágrafo de apoio ao lado (desktop) / abaixo (mobile) do título. */
  aside?: ReactNode;
  /** Sobrescreve o tamanho/peso padrão do título para esta seção. */
  titleClassName?: string;
};

const DEFAULT_TITLE_CLASSES = "heading-display text-[clamp(1.75rem,1.22rem+2.2vw,3rem)] text-text";

export function SectionHeading({ id, eyebrow, title, aside, titleClassName }: SectionHeadingProps) {
  const heading = (
    <div className={cn("flex max-w-[760px] flex-col gap-4", !!aside && "lg:max-w-[640px]")}>
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
