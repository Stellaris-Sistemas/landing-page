import { Check, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";
import { whatsappHref } from "@/lib/contact";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isCustom = project.isCustom;
  const href = isCustom ? "#contato" : whatsappHref(project.whatsappMessage);
  const target = isCustom ? undefined : "_blank";
  const rel = isCustom ? undefined : "noopener noreferrer";

  return (
    <article className="group flex h-full flex-col justify-between rounded-card border border-border bg-bg p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:border-border-strong hover:shadow-[0_8px_32px_rgba(0,82,180,0.12)]">
      <div className="flex flex-col gap-5">
        {/* Categoria / Badge */}
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full border border-brand-light/25 bg-brand/10 px-3 py-1 text-xs font-medium text-brand-light">
            {project.badge}
          </span>
          <span className="text-[11px] text-text-3 font-mono tracking-wider uppercase">
            {project.category.split(" ")[0]}
          </span>
        </div>

        {/* Nome e Descrição */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-[-0.01em] text-text sm:text-2xl">
            {project.name}
          </h3>
          <p className="text-[14.5px] leading-[1.6] text-text-2 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        {/* Lista de funcionalidades */}
        <div className="mt-2 flex flex-col gap-2.5 border-t border-border/60 pt-4">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-3">
            {isCustom ? "Principais soluções" : "Principais funcionalidades"}
          </p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-[13px] leading-snug text-text-2"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-light"
                >
                  <Check size={11} strokeWidth={2.5} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Botão de ação */}
      <div className="mt-6 pt-4 border-t border-border/40">
        <a
          href={href}
          target={target}
          rel={rel}
          className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-btn border border-border bg-surface-1 px-5 py-3 text-sm font-semibold text-text transition-all duration-200 hover:border-brand-light/40 hover:bg-surface-2 hover:text-brand-light"
        >
          <span>{project.ctaLabel ?? "Conhecer projeto"}</span>
          <ArrowRight
            aria-hidden="true"
            size={16}
            className="transition-transform duration-200 group-hover/btn:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}
